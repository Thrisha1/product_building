const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Add a basic GET route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome user' });
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, rinshad!' });
});

app.get('/api/smash', (req, res) => {
    const smash = {
        name: 'Smash',
        description: 'Smash is a great game!',
    }
    res.json({ message: 'Smash is a great game!',info:JSON.stringify(smash) });
});

app.get('/api/smash/:name', (req, res) => {
    const name = req.params.name;
    res.json({ message: `Hello, ${name}!` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
