const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const port = 3001

app.use(cors());
app.use(bodyParser.json());

app.listen(port, function () {
    console.log(`Server listening on port ${port}`)
});

app.get("/", function(req, res) {
    res.send("Hi")
})