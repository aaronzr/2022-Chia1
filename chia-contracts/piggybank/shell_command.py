import subprocess
import sys, os

WD = os.getcwd()

sp_build = subprocess.run("cdv clsp build {WD}/nft.clsp".split())
# print("The exit code was: %d" % sp_build.returncode)

# hash of info from frontend: hash(wallet_addr + ipfs_addr)
# paired_hash = "0x1cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"
paired_hash = str(sys.argv[1])
# print(paired_hash)

sp_curry = subprocess.run(f"cdv clsp curry {WD}/nft.clsp.hex -a {paired_hash} --treehash".split(), capture_output=True)
# print("The exit code was: %d" % sp_curry.returncode)
return_coin_address = sp_curry.stdout.strip().decode("utf-8") 
# print(return_coin_address) # raw hex value (no 0x)

sp_encode = subprocess.run(f"cdv encode {return_coin_address}".split(), capture_output=True)
# print("The exit code was: %d" % list_files.returncode)
encode_output = sp_encode.stdout.strip().decode()
# print(encode_output)

sp_send = subprocess.run(f"chia wallet send -a 0 -t {encode_output} --override".split(), capture_output=True)
send_output = sp_send.stdout.strip().decode()

array = send_output.split(" ")

try:
    x = array[12]
    y = array[14]
    # print(f"first: {array[12]}, second: {array[14]}")
except IndexError as e:
    print(f"Received error: {e}\n{send_output.split()}")
    exit(1)

sp_tx_info = subprocess.run(f'chia wallet get_transaction -f {array[12]} -tx {array[14]}'.split(), capture_output = True)
print(sp_tx_info.stdout.strip().decode())
exit(0)
