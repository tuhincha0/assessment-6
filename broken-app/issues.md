# Issues in Broken App

## 1. Lack of Error Handling in API Calls
### Problem:
If an API call fails, it crashes the entire route, causing the app to stop functioning.
### Solution:
I wrapped the API call in a `try-catch` block to handle individual failures without affecting the entire batch.

## 2. API Rate Limits
### Problem:
GitHub API has rate limits for unauthenticated users, which can lead to failures during development.
### Solution:
Consider authenticating requests or implementing retry logic with exponential backoff.

## 3. Logging and Debugging
### Problem:
The original app lacked logging for debugging failed API requests.
### Solution:
Added console logs to track which requests failed and why.
