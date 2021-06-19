const express = require('express');
const dotenv = require('dotenv');
const fast2sms = require('fast-two-sms');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/send', async (req, res) => {
  try {
    console.log(process.env.API_KEY_FAST2SMS);
    const response = await fast2sms.sendMessage({
      authorization: process.env.API_KEY_FAST2SMS,
      message: 'hello this is my sms service',
      numbers: [7678855707],
    });
    console.log(response);
    res.send('hello');
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server is up and running on port ${process.env.PORT}!`);
});
