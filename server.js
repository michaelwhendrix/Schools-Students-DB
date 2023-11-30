const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send(`<h1>Welcome</h1>`);
})

app.use('/api/v1/', require('./api/index.js'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})