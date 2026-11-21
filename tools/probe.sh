#!/bin/bash
# Temporary probe of the vendors' search tools; removed before the pull request.
Q='Search the web: what did the Czech Statistical Office publish most recently about consumer prices? One sentence with the figure, then one line "PROBABILITY: 0.50".'
sum() { python3 -c '
import json,sys
raw=sys.stdin.read()
try: d=json.loads(raw)
except Exception: print("NOT JSON:", raw[:400]); sys.exit()
if "error" in d and d["error"]: print("ERROR:", json.dumps(d["error"])[:500]); sys.exit()
print("keys:", list(d.keys()))
for k in ("usage","server_side_tool_usage","status","incomplete_details","citations"):
    if k in d: print(k+":", json.dumps(d[k])[:600])
items=d.get("output") or d.get("outputs") or d.get("steps") or []
if isinstance(items,list):
    from collections import Counter
    print("item types:", dict(Counter((i.get("type") if isinstance(i,dict) else str(type(i))) for i in items)))
    for i in items:
        if not isinstance(i,dict): continue
        if i.get("type") in ("web_search_call","x_search_call","google_search_call","custom_tool_call"): print(" call:", json.dumps(i)[:300])
        if i.get("type") in ("message","model_output","text"):
            print(" msg:", json.dumps(i)[:900])
if "choices" in d: print("choice:", json.dumps(d["choices"][0])[:700])
'; }
echo "== openai responses"; curl -sS -m 170 https://api.openai.com/v1/responses -H 'content-type: application/json' -d "$(python3 -c 'import json,sys; print(json.dumps({"model":"gpt-6.2-sol","input":sys.argv[1],"tools":[{"type":"web_search","search_context_size":"medium"}],"max_tool_calls":4,"include":["web_search_call.action.sources"]}))' "$Q")" | sum
echo "== xai responses"; curl -sS -m 170 https://api.x.ai/v1/responses -H 'content-type: application/json' -d "$(python3 -c 'import json,sys; print(json.dumps({"model":"grok-4.7","input":sys.argv[1],"tools":[{"type":"web_search"},{"type":"x_search"}],"max_tool_calls":4}))' "$Q")" | sum
echo "== google interactions (bearer from secret)"; curl -sS -m 170 https://generativelanguage.googleapis.com/v1beta/interactions -H 'content-type: application/json' -d "$(python3 -c 'import json,sys; print(json.dumps({"model":"gemini-4-argon","input":sys.argv[1],"tools":[{"type":"google_search"}]}))' "$Q")" | sum
echo "== google openai-compat with google_search tool"; curl -sS -m 170 https://generativelanguage.googleapis.com/v1beta/openai/chat/completions -H 'content-type: application/json' -d "$(python3 -c 'import json,sys; print(json.dumps({"model":"gemini-4-argon","messages":[{"role":"user","content":sys.argv[1]}],"extra_body":{"google":{"tools":[{"google_search":{}}]}}}))' "$Q")" | sum
echo "== done"
