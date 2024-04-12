const adminuserModel = require("../model/adminUserModel");
const bcrypt = require("bcrypt");

const createAdmin = async (req,res) =>{
    try {
        const { email, password } = req.body;
        const hashPassword = await bcrypt.hash(password,10);
        const newUser = await adminuserModel.create({email, password : hashPassword});
        res.json({message : "Admin Create Successfully",status : true, data : newUser});
    } catch (error) {
        console.log(error);
        res.json({message : "Something went wrong",status : false});
    }
}

const adminLogin = async (req,res) =>{
   try {
        const { email, password } = req.body;
        const userExist = await adminuserModel.findOne({email : req.body.email});
        if(!userExist){
            res.json({message : "User not found",status : false});
        }
        bcrypt.compare(req.body.password, userExist.password,(err,data)=>{
            if(data){
                const userObj = { id : userExist._id, email : userExist.email };
                res.json({message : "Admin Login successfully",status : true,data : userObj});
            }
        })
   } catch (error) {
    console.log(error);
    res.json({message : "Something went wrong",status : false});
   }
}

module.exports = { adminLogin, createAdmin};