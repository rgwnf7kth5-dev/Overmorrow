#!/bin/bash
# Temporary probe of the vendors' search tools; removed before the pull request.
Q='Search the web: what did the Czech Statistical Office publish most recently about consumer prices? One sentence with the figure, then one line "PROBABILITY: 0.50".'
sum() { python3 -c '
import json,sys
raw=sys.stdin.read()
try: d=json.loads(raw)
except Exception: print("NOT JSON:", raw[:400]); sys.exit()
if isinstance(d,list): print("LIST:", json.dumps(d)[:700]); sys.exit()
if "error" in d and d["error"]: print("ERROR:", json.dumps(d["error"])[:500]); sys.exit()
print("keys:", list(d.keys()))
for k in ("usage","usageMetadata","usage_metadata","server_side_tool_usage","status","incomplete_details","citations"):
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
if "candidates" in d: print("cand:", json.dumps(d["candidates"][0])[:900])
if "choices" in d: print("choice:", json.dumps(d["choices"][0])[:700])
'; }
G=https://generativelanguage.googleapis.com/v1beta
body() { python3 -c 'import json,sys; print(json.dumps(eval(sys.argv[1])))' "$1"; }
echo "== g1 interactions bearer"; curl -sS -m 120 $G/interactions -H 'content-type: application/json' -d "$(body '{"model":"gemini-4-argon","input":"Search the web: latest Czech CPI year on year? One line.","tools":[{"type":"google_search"}]}')" | sum
echo "== g2 generateContent bearer"; curl -sS -m 120 "$G/models/gemini-4-argon:generateContent" -H 'content-type: application/json' -d "$(body '{"contents":[{"parts":[{"text":"Search the web: latest Czech CPI year on year? One line."}]}],"tools":[{"google_search":{}}]}')" | sum
echo "== g3 compat tools google_search"; curl -sS -m 120 $G/openai/chat/completions -H 'content-type: application/json' -d "$(body '{"model":"gemini-4-argon","messages":[{"role":"user","content":"Search the web: latest Czech CPI year on year? One line."}],"tools":[{"google_search":{}}]}')" | sum
echo "== g4 compat extra_body.google.tools"; curl -sS -m 120 $G/openai/chat/completions -H 'content-type: application/json' -d "$(body '{"model":"gemini-4-argon","messages":[{"role":"user","content":"Search the web: latest Czech CPI year on year? One line."}],"extra_body":{"google":{"tools":[{"google_search":{}}]}}}')" | sum
echo "== g5 compat top-level google.tools"; curl -sS -m 120 $G/openai/chat/completions -H 'content-type: application/json' -d "$(body '{"model":"gemini-4-argon","messages":[{"role":"user","content":"Search the web: latest Czech CPI year on year? One line."}],"google":{"tools":[{"google_search":{}}]}}')" | sum
echo "== g6 compat responses api"; curl -sS -m 120 $G/openai/responses -H 'content-type: application/json' -d "$(body '{"model":"gemini-4-argon","input":"Search the web: latest Czech CPI year on year? One line.","tools":[{"type":"web_search"}]}')" | sum
echo "== done"
