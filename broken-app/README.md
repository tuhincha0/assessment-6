# Broken App

This is a small Express.js app that retrieves GitHub user information based on a list of usernames.

## How to Run

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the server:

    ```bash
    node app.js
    ```

3. Send a POST request to `/` with a JSON body:

    ```json
    { "developers": ["username1", "username2"] }
    ```

## Error Handling

- If a specific GitHub user cannot be fetched, the app will return an error message for that user but will continue processing the others.
