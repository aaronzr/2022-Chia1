# importing the requests library
import requests
  
# api-endpoint
URL = "http://ec2-35-175-109-209.compute-1.amazonaws.com/"
  
# location given here
# location = "delhi technological university"
  
# defining a params dict for the parameters to be sent to the API
# PARAMS = {'address':location}
  
# sending get request and saving the response as response object
# r = requests.get(url = URL, params = PARAMS)
r = requests.get(url = URL)

# extracting data in json format
# data = r.json()

print(r.text)
