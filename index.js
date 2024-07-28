require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('../server/routes/router')
require('../server/db/connection')

const styleServer = express()
styleServer.use(cors())
styleServer.use(express.json())
styleServer.use(router)


PORT = 3000 || process.env.PORT

styleServer.listen(PORT,()=>{
    console.log(`Style server running on port : ' ${PORT}`);
})

styleServer.get('/',(req,res)=>{
    res.send('<h1> Style server is running and waiting for response </h1>')
})