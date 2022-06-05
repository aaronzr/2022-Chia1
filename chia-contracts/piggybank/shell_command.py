import subprocess

list_files = subprocess.run(["cdv", "clsp", "build", "nft.clsp"])
print("The exit code was: %d" % list_files.returncode)

paired_hash = "0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"

list_files = subprocess.run(["cdv", "clsp", "curry", "nft.clsp.hex", "-a", paired_hash, "--treehash"], stdout=subprocess.PIPE)
print("The exit code was: %d" % list_files.returncode)
return_coin_address = list_files.stdout.strip().decode("utf-8") 
print(return_coin_address)

list_files = subprocess.run(["cdv", "clsp", "curry", "nft.clsp.hex", "-a", return_coin_address, "--treehash"])
print("The exit code was: %d" % list_files.returncode)