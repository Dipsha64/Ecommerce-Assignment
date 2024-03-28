const userModel = require("../model/userModel");

const getAllUser = async (req,res) =>{
    try {
        const userData = await userModel.find({isDelete : false}).select("-password");
        if(userData){
            res.json({message : "All User get successfully",status : true,data : userData});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
    } catch (error) {
        console.log(error);
        res.json({message : "Something went wrong",status : false});
    }
}

const getSingleUser = async (req,res) =>{
    try {
        const id = req.params.id;
        const userData = await userModel.findOne({_id : id,isDelete : false}).select("-password");
        if(userData){
            res.json({message : "User get successfully",status : true,data : userData});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req,res) =>{
    try {
        const id = req.params.id;
        const userData = await userModel.findByIdAndUpdate(id,{$set : req.body});
        if(userData){
            res.json({message : "User updated successfully",status : true,data : userData});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (req,res) =>{
    try {
        const id = req.params.id;
        const userData = await userModel.findByIdAndUpdate(id,{$set : {isDelete : true}});
        if(userData){
            res.json({message : "User Deleted successfully",status : true,data : userData});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllUser,getSingleUser, updateUser,deleteUser };