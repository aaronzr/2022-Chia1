# importing the requests library
import requests
  
# defining the api-endpoint 
URL = "http://ec2-35-175-109-209.compute-1.amazonaws.com/"
  
dictToSend = {f'very{i}': f'long{i}' for i in range(5)}
  
# sending post request and saving response as response object
# r = requests.post(url = API_ENDPOINT, data = data)
r = requests.post(URL, json=dictToSend)
print(r.text)
# extracting response text 
print(f"dict from server: {r.json()}")
