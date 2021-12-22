const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const routes = require('./routes/main');
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
const defaultRoute = '/api';
app.use( defaultRoute , routes);
app.listen(PORT, console.log(`Server runing in  ${PORT}`));