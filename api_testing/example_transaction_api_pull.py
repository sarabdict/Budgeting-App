import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
env_path =  "/Users/sarabenedict/quickstart/.env"
load_dotenv(env_path)

# Retrieve values from the .env file
PLAID_CLIENT_ID = os.getenv("PLAID_CLIENT_ID")
PLAID_SECRET = os.getenv("PLAID_SECRET")
PLAID_ACCESS_TOKEN = os.getenv("PLAID_ACCESS_TOKEN")

# Plaid API endpoint
url = "https://sandbox.plaid.com/transactions/sync"

# Request payload
payload = {
    "client_id": PLAID_CLIENT_ID,
    "secret": PLAID_SECRET,
    "access_token": PLAID_ACCESS_TOKEN,
    "cursor": None  # Set this to a stored cursor value for incremental updates
}

# Headers
headers = {"Content-Type": "application/json"}

# API request
response = requests.post(url, json=payload, headers=headers)

# Print response
print(response.json())
