const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    isDelete : {
        type : Boolean,
        default : false
    }
},{
    timestamps : true
}
)

module.exports = mongoose.model("Users",userSchema);