const express = require('express')
    , bodyParser = require('body-parser')
    , port = 3010
    , app = express();

const data = {
    users: [
        {
            name: 'Alan',
            desc: 'That one guy.'
        }
    ]
}

app.get('/api/data', (req, res) => {
    res.status(200).send(data);
});

app.listen(port, () => { console.log(`Listening on ${port}.`)});