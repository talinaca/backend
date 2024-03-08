const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Define a route to handle incoming requests
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});