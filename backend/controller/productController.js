const productModel = require("../model/productModel");

const createProduct = async(req,res) =>{
    try {
        const { productName,productSKU, productPrice, productCategory, ratings, productDescription } = req.body;
        const productExist = await productModel.findOne({productSKU : req.body.productSKU});
        if(productExist){
            res.json({message : "Product alredy exists",status : false});
        }
        else{
            const newProduct = await productModel.create({
                productName,productSKU, productPrice, productCategory, ratings, productDescription
            })
            res.json({message : "Product created successfully",status : true,data : newProduct});
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllProduct = async (req,res) =>{
    try {
        const query = req.query;
        let fetchData = null;
        if(query){
            fetchData = await productModel.find({isDelete : false,
            $or:[
                {productName : {$regex : query, $options : "i"}},
            ]
            });
        }
        else{
            fetchData = await productModel.find({isDelete : false});
        }
        if(fetchData){
            res.json({message : "All Product get successfully",status : true,data : fetchData});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
    } catch (error) {
        console.log(error);
        res.json({message : "Something went wrong",status : false});
    }
}

const getSingleProduct = async (req,res) =>{
    try {
        const id = req.params.id;
        const productData = await productModel.findOne({_id : id,isDelete : false});
        if(productData){
            res.json({message : "product get successfully",status : true,data : productData});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async (req,res) =>{
    try {
        const id = req.params.id;
        const productData = await productModel.findByIdAndUpdate(id,{$set : req.body});
        if(productData){
            res.json({message : "Product updated successfully",status : true,data : productData});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (req,res) =>{
    try {
        const id = req.params.id;
        const userData = await productModel.findByIdAndUpdate(id,{$set : {isDelete : true}});
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

module.exports = { createProduct,getAllProduct,getSingleProduct, updateProduct,deleteProduct };