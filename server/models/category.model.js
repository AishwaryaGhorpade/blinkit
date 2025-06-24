import mongoose, { mongo } from "mongoose";
const cotegorySchema =new mongoose.Schema({
    name:{
        type:String,
        default:"",
    },
    image:{
        type:String,
        default:""
    }
},{
    timestamps:true 
});
const categoryModel=mongoose.model("category",cotegorySchema);

export default categoryModel;
