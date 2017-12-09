const express = require('express');
const app = express();
const router = require('./router.js')
app.use(router)
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
  })