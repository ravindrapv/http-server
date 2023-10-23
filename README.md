# Node.js Express Server

This is a simple Node.js server using Express.js that provides various endpoints to handle different requests.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd http-drill-1-expressndencies:
`npm install`

Endpoints
/html: Returns an HTML page.

/json: Returns a JSON response.

/uuid: Returns a UUID (v4) as JSON.

/status/{status_code}: Returns a response with the specified HTTP status code.

/delay/{delay_in_seconds}: Delays the response for the specified number of seconds.

Example Requests
Access HTML: http://localhost:3000/html

Access JSON: http://localhost:3000/json

Access UUID: http://localhost:3000/uuid

Set a custom status code: http://localhost:3000/status/200

Set a delayed response: http://localhost:3000/delay/5

Contributing
Feel free to contribute to this project by opening issues or pull requests.

