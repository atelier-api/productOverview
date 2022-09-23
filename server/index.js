const express = require('express');
require("dotenv").config();
const app = require('./routes');

const PORT = process.env.PORT || 3000;

const start = (port) => {
  try {
    app.listen(PORT);
    console.log(`Server listening at http://localhost:${PORT}`);
  } catch (err) {
    console.log(err);
    process.exit();
  }
}

start(PORT);