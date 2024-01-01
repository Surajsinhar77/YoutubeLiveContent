const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const database = require('./database.json');
const spkey = "213817@q7wbdasbd";

const {SchemaAndModel} = require('./db');
const userModel = SchemaAndModel();

//middleware 
app.use(cors())
app.use(express.json());


function createToken({ email, role}){
    const token = jwt.sign({email,role}, spkey);
    if(!token){
        console.log("token is false");
        return;
    }
    return token;
}

function loginTokenVerfication(req, res, next){
    // const token = req.headers["authorization"];
    const token = req.headers["authorization"] === ('null')? null : req.headers["authorization"];
    try{
        if(token){
            jwt.verify(token, spkey, (err, decord)=>{
                if(err){
                    return res.json({msg : err.message, err});
                }
                return res.json({msg : "You are sucessfull login", data: decord});
            })
            res.json({msg : "invalid token"});
        }
        next();
    }catch(err){
        return res.json({mes: err.mes});
    }
}

app.post('/login',loginTokenVerfication ,async(req, res)=>{
    const {email, password} = req.body;
    try{
        const userExist = await userModel.findOne({email:email});
        if(userExist){
            const passwordVerification = await bcrypt.compare(password,userExist.password);
            if(passwordVerification){
                const authToken = createToken({email, role : "MEMBER"});
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Authorization', authToken);
                return res.status(200).json({msg: "Login SucessFull", data : userExist, accessToken : authToken});
            }
            return res.json({msg: "Password not Match"});
        }
        return res.json({msg:"User Not Exist"});
    }catch(err){
        res.json({msg : err.message});
    }
})

app.post('/register', async (req,res)=>{
    const {fullName, email, phoneno, password} = req.body;
    try{   
        const userData = await userModel.findOne({email:email});
        if(userData){
            return res.status(400).json({mes:"User is already exist", data : userData});
        }
        const hashpassword = await bcrypt.hash(password,10);
        const user = new userModel({
            fullName,
            email,
            phoneno,
            password : hashpassword,
        })
        const result = await user.save();

        return res.status(200).json({msg :'user Account is sucessfull created', result: result});
    }catch(err){
        console.log(err);
        res.json({mes: err});
    }
})

app.get('/', (req,res)=>{
    console.log(createToken({email: 'sinha123@gmail.com', role: "admin"}));
    res.json({mes:"somethings"});
})

app.listen(8000, function(){
    console.log("http://localhost:8000");
})