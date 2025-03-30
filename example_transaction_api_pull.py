import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
env_path = "/Users/sarabenedict/quickstart/.env"
load_dotenv(env_path)

# Retrieve values from the .env file
PLAID_CLIENT_ID = os.getenv("PLAID_CLIENT_ID")
PLAID_SECRET = os.getenv("PLAID_SECRET")
PLAID_ACCESS_TOKEN = os.getenv("PLAID_ACCESS_TOKEN")

url = "https://sandbox.plaid.com/transactions/sync"
headers = {"Content-Type": "application/json"}
payload = {
    "client_id": PLAID_CLIENT_ID,
    "secret": PLAID_SECRET,
    "access_token": PLAID_ACCESS_TOKEN,
    "start_date": "2024-01-01",
    "end_date": "2024-03-30",
    "options": {"count": 10}
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
