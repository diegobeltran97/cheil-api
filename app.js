const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;
const routes = require('./routes/main');
const cors = require("cors");
const path = require('path');
const formData = require('express-form-data');
const multer = require('multer');

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));


app.use('/static', express.static(path.join(__dirname,'public')))
app.use(bodyParser.json());
// app.use(formData.parse());

const defaultRoute = '/api';
app.use( defaultRoute , routes);
app.listen(PORT, console.log(`Server runing in  ${PORT}`));