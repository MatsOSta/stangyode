import json,subprocess
r=subprocess.run(['/home/mats/.local/bin/hermes','-p','stangyode-pm','kanban','--board','stangyode','dispatch','--max','1','--json'],capture_output=True,text=True,check=True)
v=json.loads(r.stdout)
if any(v.get(k) for k in ['spawned','crashed','timed_out','auto_blocked']):print(json.dumps(v))
