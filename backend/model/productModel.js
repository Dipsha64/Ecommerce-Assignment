const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName : {
        type : String,
        require : true
    },
    productSKU : {
        type : String,
        require : true
    },
    productPrice : {
        type : String,
        require : true
    },
    productCategory : {
        type : String,
        require : true
    },
    ratings :{
        type : Number,
        enum: ["1", "2","3","4","5"],
        default: "1",
    },
    productDescription : {
        type : String,
    },
    isDelete : {
        type : Boolean,
        default : false
    }
},
{
    timestamps : true
})

module.exports = mongoose.model("Products",productSchema);