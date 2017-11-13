const express = require('express')
    , bodyParser = require('body-parser')
    , port = 3010
    , app = express();

app.listen(port, () => { console.log(`Listening on ${port}.`)});