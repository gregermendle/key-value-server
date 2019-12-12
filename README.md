# Key Value Server

A simple app that stores a key and value in a sqlite database.

To setup:

```
./install_modules
```

To run the app:

```
./run_server
./run_client
```

# Requirements

1. `POST` requests containing a `key` and `value` should be accepted at the `/store` endpoint
2. `key` and `value` pairs should be unique and duplicate pairs should not exist in the database
3. Users should be able to enter their key and value in a web browser via a form
4. When a user enters a key-value pair that already exists, an error should be shown
