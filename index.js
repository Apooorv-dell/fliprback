const express = require('express');
const app = express()
const cors = require('cors')
const data = require('./prize.json')

app.use(express.json())
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.get('/',cors(corsOptions),(req,res)=>{
      res.send(data)
})

app.listen(300,()=>{
    console.log('ruungon 300')
})




