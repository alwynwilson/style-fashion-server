const mongoose = require('mongoose')
connection_string = process.env.CONNECTION_STRING

mongoose.connect(connection_string).then((res)=>{
    console.log("MongoDB Atlas connected to style guru server");
}).catch((err)=>{
    console.log("Connection failed");
    console.log(err);
})