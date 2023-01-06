const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());

// import middleware
const authentication = require('./middlewares/authentication');

app.get('/', async (req, res) => {
    try {
      res.send({
        success: true,
        message: 'Backend is running',
      });
    } catch (e) {
      res.send({
        success: false,
        message: 'Error',
      });
    }
});

app.get('/getData', authentication, async (req, res) => {
    try {
      res.status(200).send({
        responseCode: 200,
        responseMessage: 'Hi getData berhasil dilakukan!',
      });
    } catch (e) {
      res.status(500).send({
        responseCode: 500,
        responseMessage: 'Error',
      });
    }
});

app.post('/postData', authentication, async (req, res) => {
    try {
      res.status(200).send({
        responseCode: 200,
        responseMessage: 'Hi postData berhasil dilakukan!',
      });
    } catch (e) {
      res.status(500).send({
        responseCode: 500,
        responseMessage: 'Error',
      });
    }
});

server.listen(12345, () => {
    console.log('listening on port ' + 12345);
});