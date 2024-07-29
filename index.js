const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configure CORS to accept requests from any origin
app.use(
  cors({
    origin: '*', // Allow requests from all origins
    credentials: true, // Enable credentials (cookies, authorization headers)
  })
);

// Middleware to parse JSON bodies in requests
app.use(bodyParser.json());

// Enable Helmet middleware for securing HTTP headers
app.use(helmet());

// Define the global API to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello From Dev-Server');
});

app.listen(5222, () => {
  console.log(`Server is listening on 5222`);
});
