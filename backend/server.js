const express = require('express');
const dotenv = require('dotenv').config();
const port = 5000;

const app = express();
app.listen(port, () => {
  console.log(`Server is runner on port ${port}`);
});
