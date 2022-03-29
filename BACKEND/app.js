const express = require("express");
const app = express();
const fil_router = require('./routers/fil_router.js');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');
const cred_route = require("./routers/credentials_route");
require('dotenv/config');
const emp_route = require("./routers/EmployeeRoute");
const admin_route = require("./routers/AdminRouter");

app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res) => {
    res.send("This is the home page!!!!");
})

mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {console.log("DB Connected!")});

app.use('/fil', fil_router);
app.use('/cred',cred_route);
app.use('/emp',emp_route);
app.use('/admin',admin_route);

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
});