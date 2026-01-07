import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { 
        type: String, 
        required: true 
    },
    description: String,
    price: { 
        type: Number, 
        required: true 
    },
    imageUrl: String
    
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
