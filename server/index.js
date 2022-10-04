const express = require('express');
require("dotenv").config();
const app = require('./routes');

const PORT = process.env.PORT || 3000;

const start = (port) => {
  try {
    app.listen(port);
    console.log(`Server listening at http://localhost:${port}`);
  } catch (err) {
    console.log(err);
    process.exit();
  }
}

start(PORT);