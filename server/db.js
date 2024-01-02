const mongoose = require('mongoose');
const  url = 'mongodb+srv://admin:N0H6JQXIHq2s8Fdr@atlascluster.l14gp7p.mongodb.net/?retryWrites=true&w=majority'

async function toConnectDatabase(){
    console.log("Is this Function is called")
    try{
        await mongoose.connect(url)
        console.log("sucessFull");
    }catch(err){
        console.log(err);
    }
}

toConnectDatabase();

function SchemaAndModel(){
    const schemaUser = new mongoose.Schema({
        fullName :{
            type:String,
            required : true,
            
        },
        email:{
            type:String,
            required:true,
            unique : true,
        },
        phoneno:{
            type:Number,
            required:true,
            unique : true,
        },
        password:{
            type:String,
            required:true,
        }
    });

    const usermodel = new mongoose.model('userDatas', schemaUser);
    return usermodel;
}

module.exports = {
    SchemaAndModel,
}


