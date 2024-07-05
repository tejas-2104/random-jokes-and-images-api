# Random Jokes and Images API

## Overview

This project is a Node.js API that serves random jokes and images. It includes endpoints for fetching random jokes, random images, and a combination of both. The API uses Express.js for server setup and Axios for making HTTP requests to external APIs.

## Endpoints

### GET /api/jokes/random

Fetches a random joke.

#### Response

```json
{
  "id": 123,
  "type": "general",
  "setup": "Why don't scientists trust atoms?",
  "punchline": "Because they make up everything!"
}
```

### GET /api/images/random

Fetches a random image URL.

### Response

```json
{
  "imageUrl": "https://picsum.photos/id/237/200/300"
}
```

### GET /api/jokes-and-images/random

Fetches a random joke and a random image URL.

### Respone

```json
{
  "joke": {
    "id": 123,
    "type": "general",
    "setup": "Why don't scientists trust atoms?",
    "punchline": "Because they make up everything!"
  },
  "imageUrl": "https://picsum.photos/id/237/200/300"
}
```

## Setup and Installation

1.Clone the repository:

```bash
    git https://github.com/tejas-2104/random-jokes-and-images-api.git
```

2.Install dependencies:

```bash
    npm install
```

3.Start the server:

```bash
    npm start
```

4. Access the API

- Random Joke: [http://localhost:8080/api/jokes/random](http://localhost:8080/api/jokes/random)
- Random Image: [http://localhost:8080/api/images/random](http://localhost:8080/api/images/random)
- Random Joke and Image: [http://localhost:8080/api/jokes-and-images/random](http://localhost:8080/api/jokes-and-images/random)

## Challenges Faced

### Fetching Random Images

Initially, I attempted to fetch random images from Unsplash using their `source.unsplash.com/random` endpoint. However, due to complications and potential API key requirements, I encountered issues with reliable image fetching.

**Solution**: I switched to using the Lorem Picsum API ([https://picsum.photos](https://picsum.photos)), which provides random images without the need for an API key. This approach simplified the process and ensured reliable image retrieval.

### Handling Asynchronous Requests

Managing multiple asynchronous requests for fetching jokes and images simultaneously posed a challenge.

**Solution**: I used `async` and `await` with Axios to handle these requests cleanly and ensure the API responded correctly with combined data.

### Error Handling

Ensuring robust error handling for both joke and image fetching was crucial to provide meaningful feedback to the client in case of failures.

**Solution**: I implemented try-catch blocks in each endpoint to handle potential errors and return appropriate status codes and error messages.

## Conclusion

This project provided valuable experience in integrating multiple data sources into a single API, handling diffe

