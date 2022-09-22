const express = require('express');
require("dotenv").config();

const controller = require('./controllers/controllers');
const authentication = require('./middleware/authentication');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get()