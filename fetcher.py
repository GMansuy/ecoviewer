import requests

# Define the URL of your API
url = 'http://localhost:4444/api/greenit/project?projectName=eco-sonar-test'

# Fetch the JSON data from the API
try:
    response = requests.get(url)
    response.raise_for_status()  # Raise an error for bad responses (non-2xx status codes)
    json_data = response.json()
    
    # Accessing data
    print(json_data['allowW3c'])
    print(json_data['deployments']['greenit'][0]['dateAnalysis'])
    print(json_data['deployments']['lighthouse'][0]['performanceScore'])
    print(json_data['lastAnalysis']['greenit']['domSize']['displayValue'])
    
except requests.exceptions.RequestException as e:
    print('Error fetching JSON data:', e)
