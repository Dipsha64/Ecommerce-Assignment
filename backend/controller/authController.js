const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (obj) =>{
    return jwt.sign({id : obj.id, role : obj.role},process.env.JWT_SECRET_KEY,{expiresIn : '15d'});
}

const registerUser = async (req,res) =>{
    try {
        const { firstName, lastName, email, password} = req.body;
        const userExist = await userModel.findOne({email : req.body.email});
        if(userExist){
            res.json({message : "User alredy exists",status : false});
        }
        else{
            const hashPassword = await bcrypt.hash(req.body.password,10);
            const newUser = await userModel.create({
                firstName, lastName, email, password : hashPassword
            })
            delete newUser.password;
            res.json({message : "User created successfully",status : true,data : newUser});
        }
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (req,res) =>{
    try {
        console.log("DATAAAA Done");
        console.log("REQ BODY",req.body);
        const { email, password } = req.body;
        const userExist = await userModel.findOne({email : req.body.email});
        if(!userExist){
            res.json({message : "User not found",status : false});
        }
        else{
            bcrypt.compare(req.body.password, userExist.password,(err,data)=>{
                if(data){
                    const userObj = { id : userExist._id, firstName : userExist.firstName,lastName : userExist.lastName, email : userExist.email };
                    let token = generateToken(userObj);
                    res.json({message : "User Login successfully",status : true,data : userObj,token : token});
                }
                else{
                    res.json({message : "Incorrect email & password, try again",status : false});
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { registerUser, loginUser };