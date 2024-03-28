
const { default: mongoose } = require('mongoose');
const orderModel = require('../model/orderModel');

const getAllOrder = async(req,res) =>{
    try {
        const query = req.query;
        let orderData = null;
        if(query){
            orderData = await orderModel.find({
                $or:[
                    {productName : {$regex : query, $options : "i"}},
                ]
            });
        }
        else{
            orderData = await orderModel.find({});
        }
        if(orderData){
            res.json({message : "All Order get successfully",status : true,data : orderData});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

const getSingleOrder = async (req,res) => {
    try {
        const id = req.params.id;
        const orderData = await orderModel.findOne({_id : id});
        if(orderData){
            res.json({message : "product get successfully",status : true,data : orderData});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

const createOrder = async (req,res) =>{
    try {
        const { userid,orderItem, shippingAddress, billingAddress, orderId, orderDate } = req.body;
        const orderExist = await orderModel.findOne({orderId : req.body.orderId});
        if(orderExist){
            res.json({message : "Order already there, please create other",status : false});
        }
        else{
            const newOrder = await orderModel.create({
                userid,orderItem, shippingAddress, billingAddress, orderId, orderDate
            })
            res.json({message : "Order created successfully",status : true,data : newOrder});
        }
    } catch (error) {
        console.log(error);   
    }
}

const updateOrder = async (req,res) =>{
    try {
        const id = req.params.id;
        const orderData = await orderModel.findByIdAndUpdate(id,{$set : req.body});
        if(orderData){
            res.json({message : "Product updated successfully",status : true,data : orderData});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteOrder = async (req,res) =>{
    try {
        const id = req.params.id;
        const orderData = await orderModel.findByIdAndUpdate(id,{$set : {orderStatus : "cancelled"}});
        if(orderData){
            res.json({message : "Order Deleted successfully",status : true,data : orderData});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllOrder,getSingleOrder,createOrder, updateOrder,deleteOrder }