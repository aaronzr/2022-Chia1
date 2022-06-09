# importing the requests library
import requests
  
# defining the api-endpoint 
URL = "http://ec2-35-175-109-209.compute-1.amazonaws.com/"

# correctly formed dict
dictToSend = {'ipfs_url': '123', 'wallet_address': '456'}

# incorrectly formed dict; use to test server's error handling
# dictToSend = {1:2, 3:4}

# sending post request and saving response as response object
r = requests.post(URL, json=dictToSend)
print(r.text)

# extracting response text 
try:
    print(f"dict from server: {r.json()}")
except(requests.exceptions.JSONDecodeError):
    print("Response was not in pure JSON form")
