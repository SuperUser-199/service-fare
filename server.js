const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 8000

app.listen(port, () => `Server running on port ${port}`);