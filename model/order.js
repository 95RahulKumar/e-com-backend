const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    shipingInfo:{
        address:{type:String, required:true},
        city:{type:String, required:true},
        state:{type:String, required:true},
        country:{type:String, required:true},
         pincode:{type:Number, required:true},
         phoneNumber:{type:Number, required:true},
    },
    orderItems:[
        // {
        //     name:{type:String, required:true},
        //     price:{type:Number, required:true},
        //     quantity:{type:Number, required:true},
        //     image:{type:String, required:true},
        //     product:{
        //         type:mongoose.Schema.ObjectId,
        //         ref:'Product',
        //         required:true
        //     }
        // }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required: true
      },
      paymentInfo:{
        id:{type:String, required:true},
        status:{type:String, required:true},
      },
      paidAt:{
        type:Date,
        required:true
      },
      taxPrice:{
        type:Number,
        default:0,
        required:true
      },
      shipingPrice:{
        type:Number,
        default:0,
        required:true
      },
      totalPrice:{
        type:Number,
        default:0,
        required:true
      },
      orderStatus:{
        type:String,
        required:true,
        default:"Proccessing"
      },
      deliveredAt:Date,
      createdAt:{
        type:Date,
        default:Date.now
      }
  });
  module.exports = mongoose.model('Order', orderSchema);