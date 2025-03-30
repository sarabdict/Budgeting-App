import requests

PLAID_CLIENT_ID = "your_client_id"
PLAID_SECRET = "your_secret"
PLAID_ACCESS_TOKEN = "your_access_token"

url = "https://sandbox.plaid.com/transactions/get"
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
