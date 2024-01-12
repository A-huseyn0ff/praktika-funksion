import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductSchema = new Schema({
    icon:{type:String},
    name:{type:String},
    title:{type:String}
  });

  export const Pro=mongoose.model('p', ProductSchema);