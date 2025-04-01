import os
import ssl
import certifi
import plaid
from dotenv import load_dotenv
from plaid import Configuration, ApiClient
from plaid.api import plaid_api
from plaid.model.link_token_create_request import LinkTokenCreateRequest
from plaid.model.products import Products
from plaid.model.country_code import CountryCode
from plaid.configuration import Environment


from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify

# Fix SSL Certificate Verification Issue
ssl_context = ssl.create_default_context(cafile=certifi.where())

# Load environment variables
env_path = "/Users/sarabenedict/quickstart/.env"
load_dotenv(env_path)
PLAID_CLIENT_ID = os.getenv("PLAID_CLIENT_ID")
PLAID_SECRET = os.getenv("PLAID_SECRET")

def get_link_token():
    """Generate and return a Plaid link token."""
    configuration = plaid.Configuration(
        host=plaid.Environment.Sandbox,
        api_key={
            'clientId': PLAID_CLIENT_ID,
            'secret': PLAID_SECRET,
        }
    )

    # Apply SSL context to API Client
    api_client = ApiClient(configuration)
    api_client.rest_client.pool_manager.connection_pool_kw["ssl_context"] = ssl_context
    client = plaid_api.PlaidApi(api_client)

    # Create a link token
    link_token_request = LinkTokenCreateRequest(
        products=[Products('transactions')],
        client_name='Your App Name',
        country_codes=[CountryCode('US')],
        language='en',
        user={'client_user_id': 'unique_user_id'}
    )
    link_token_response = client.link_token_create(link_token_request)
    
    # Extract and return the link token
    return link_token_response['link_token']

# If this file is run directly, print the token for debugging
if __name__ == "__main__":
    print(f"Generated Link Token: {get_link_token()}")
