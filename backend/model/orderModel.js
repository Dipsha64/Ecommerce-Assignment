const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    userid  : {
        type : mongoose.Schema.Types.ObjectId
    },
    orderItem  : {
        type : Array
    },
    shippingAddress : {
        type : Object
    },
    billingAddress : {
        type : Object
    },
    orderId : {
        type : Number
    },
    orderDate : {
        type : Date
    },
    orderStatus : {
        type : String,
        enum: ["pending", "completed","shipped","cancelled"],
        default: "pending",
    }
},{
    timestamps : true
})

module.exports = mongoose.model("orders",orderSchema);