import subprocess
import sys, os

DEBUG = False
WD = '/home/ubuntu/2022-Chia1/chia-contracts/piggybank'
ERROR_LOG = '/home/ubuntu/error.log'

# change PATH variable so we can find 'cdv' command
NEW_PATH = '/home/ubuntu/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin'

# look at the env variable
sp_env = subprocess.run(f"env".split(), env=dict(PATH=NEW_PATH), capture_output=True)
DEBUG and print(f"sp_env stdout: {sp_env.stdout.decode()}")
DEBUG and print(f"sp_env stderr: {sp_env.stderr.decode()}")

# check whether we have the cdv command
sp_cdv = subprocess.run(f"which cdv".split(), env=dict(PATH=NEW_PATH), capture_output=True)
DEBUG and print(f"sp_cdv stdout: {sp_cdv.stdout.decode()}")
DEBUG and print(f"sp_cdv stderr: {sp_cdv.stderr.decode()}")

sp_build = subprocess.run(f"cdv clsp build {WD}/nft.clsp".split(), env=dict(PATH=NEW_PATH), capture_output=True)
# print("The exit code was: %d" % sp_build.returncode)
DEBUG and print(f"sp_build stdout: {sp_build.stdout.decode()}")
DEBUG and print(f"sp_build stderr: {sp_build.stderr.decode()}")

# hash of info from frontend: hash(wallet_addr + ipfs_addr)
paired_hash = str(sys.argv[1])
DEBUG and print(paired_hash)

sp_curry = subprocess.run(f"cdv clsp curry {WD}/nft.clsp.hex -a {paired_hash} --treehash".split(), env=dict(PATH=NEW_PATH), capture_output=True)
# print("The exit code was: %d" % sp_curry.returncode)
return_coin_address = sp_curry.stdout.strip().decode("utf-8") 
if sp_curry.stderr:
    DEBUG and print(f"sp_curry stderr: {sp_curry.stderr.decode()}")

sp_encode = subprocess.run(f"cdv encode {return_coin_address}".split(), env=dict(PATH=NEW_PATH), capture_output=True)
# print("The exit code was: %d" % list_files.returncode)
encode_output = sp_encode.stdout.strip().decode()
DEBUG and print(f"sp_encode stderr: {sp_encode.stderr.decode()}")

sp_send = subprocess.run(f"chia wallet send -a 0 -t {encode_output} --override".split(), capture_output=True)
send_output = sp_send.stdout.strip().decode()
DEBUG and print(f"sp_send stdout: {send_output}")
DEBUG and print(f"sp_send stderr: {sp_send.stderr.decode()}")

array = send_output.split(" ")

try:
    x = array[12]
    y = array[14]
    # print(f"first: {array[12]}, second: {array[14]}")
except IndexError as e:
    print(f"Received error: {e}\n{send_output}")
    exit(1)

sp_tx_info = subprocess.run(f'chia wallet get_transaction -f {array[12]} -tx {array[14]}'.split(), capture_output = True)
DEBUG and print(f"sp_tx_info stderr: {sp_tx_info.stderr.decode()}")

print(sp_tx_info.stdout.strip().decode())
exit(0)
