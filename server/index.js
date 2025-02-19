const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Add a basic GET route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, rinshad!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
