from flask import Flask, request, jsonify
# from flask_cors import CORS
import os, subprocess
from datetime import datetime as dt

app = Flask(__name__)

DEBUG = False
NETWORK_LOG = '/home/ubuntu/net.log'
SYNC_STATUS_LOG = '/home/ubuntu/sync.log'
CHIA_LAUNCHER = '/home/ubuntu/2022-Chia1/chia-contracts/piggybank/shell_command.py'
ERROR_LOG = '/home/ubuntu/error.log'
CHIA_TEST = '/home/ubuntu/test/chia.py'
SLEEP_TEST = '/home/ubuntu/test/sleep.py'

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    greeting = "Welcome to Oval's Chia node"
    request_echo = f'You sent me a {request.method} request!'
    response = ''
    
    os.system(f'echo {"="*20}>> {ERROR_LOG}')
    os.system(f'echo "received {request.method} request at {dt.now()}" >> {ERROR_LOG}')
    
    if request.method == 'POST':
        input_json = request.get_json(force=True) # dict
        # force=True, above, is necessary if another developer
        # forgot to set the MIME type to 'application/json'
        try:
            ipfs_url = input_json["ipfs_url"]
            wallet_address = input_json["wallet_address"]
            DEBUG and os.system(f'echo "client data: {input_json}" >> {ERROR_LOG}')

            h = hash(ipfs_url + wallet_address)
            DEBUG and os.system(f'echo "hash of client data: {str(h)}" >> {ERROR_LOG}')

            sp_whoami = subprocess.run(["whoami"], capture_output=True)
            DEBUG and os.system(f'echo "subprocess whoami: {sp_whoami.stdout.decode()}" >> {ERROR_LOG}')

            sp_chia = subprocess.run(f'python3 {CHIA_TEST} {h}'.split(), capture_output=True)
            # sp_chia = subprocess.run(f'python3 {SLEEP_TEST} 5'.split(), capture_output=True)
            # success = "Request failed!" if sp_chia.returncode == 1 else "Request success!"
            response = sp_chia.stdout.decode()
            os.system(f'echo "transaction output: {response}" >> {ERROR_LOG}')
            os.system(f'echo "transaction error: {sp_chia.stderr.decode()}" >> {ERROR_LOG}')

            try:
                os.system(f'echo "JSON requested: {input_json["json"]}" >> {ERROR_LOG}')
                return f"You'd like some JSON, yes? Here, have this in the meantime:\n{response}"
            except KeyError as e:
                os.system(f'echo "JSON requested: no" >> {ERROR_LOG}')
        
        except KeyError as e:
            response = f'Malformed request! Please use "ipfs_url" and "wallet_address" as keys. You sent: {input_json}'
    
    # log the request we received
    os.system(f'echo "received {request.method} request at {dt.now()}" >> {NETWORK_LOG}')
    if request.method == 'POST':
        os.system(f'echo "response to client: {response}" >> {NETWORK_LOG}')
   
    # report recent blockchain status
    sp = subprocess.run(["tail", SYNC_STATUS_LOG], capture_output=True)
    recent_status = f"Recent status of the blockchain:\n{sp.stdout.decode()}"

    html =  f'''
            <span style="white-space: pre-line">
            <h1>{greeting}</h1>
            <p>{request_echo}</p>
            <p>{response}</p>
            <p>{recent_status}</p>
            </span>
            '''
    return html


if __name__ == "__main__":
    app.run()
