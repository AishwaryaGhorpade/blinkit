import mongoose from "mongoose";
const subCategorySchema=new mongoose.Schema({
    name:{
        type:String,
        default:""
    },
    image:{
        type:String,
        default:""
    },
    category:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }
    ]
},{
    timestamps:true
});

const subCategoryModel=mongoose.model("subCategory",subCategorySchema);

export default subCategoryModel;
