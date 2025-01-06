const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
        FoodName:{type:String,required:true},
        FoodCode:{type:Number,required:true},
        FoodImg:{type:String,required:true},
        FoodCategory:{type:String,required:true},
        Qty:{type:Number,required:true},
        Price:{type:Number,required:true}
},{timestamps:true,versionKey:false})

const ProductModel=mongoose.model('products',DataSchema)
module.exports=ProductModel;

