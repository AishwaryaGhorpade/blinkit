import mongoose from 'mongoose';

const orderSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderId:{
        type:String,
        required:[true,"Provide Order ID"],
        unique:true
    },
    puductId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    product_details:{
        name:String,
        image:Array
    },
    paymentId:{
        type:String,
        default:""
    },
    payment_status:{
        type:String,
        default:""
    },
    delevery_address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address'
    },
    subTotalAmt:{
        type:Number,
        default:0
    },
    totalAmt:{
        type:Number,
        default:0
    },
    invoice_receipt:{
        type:String,
        default:""
    }
},{
    timestamps:true
});

const orderModel=mongoose.model("order",orderSchema);

export default orderModel;