const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MusicWebsite01",{
    useNewUrlParser:true
}).then(()=>{
    console.log("Connection successfull");
}).catch((e)=>{
    console.log("No connection" + e);
});


