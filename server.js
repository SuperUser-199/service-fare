const express = require('express');
const cors = require('cors');
require('dotenv').config()
const path = require('path')

const app = express();
app.use(express.json())
app.use(cors())

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 8000

app.listen(port, () => `Server running on port ${port}`);