import moongoose from "mongoose";

const productSchema = new moongoose.Schema(

    {
      name: {
        type: String,
        required: [true,"Product name is required"],
        trim: true,
    },

        price: {
        type: Number,   
        required: [true,"Product price is required"],
        min: [0,"Product price cannot be negative"],

    },

        description: {
        type: String,
        default: "",
        trim: true,
    },

        image: {
        type: String,
        required: [true,"Product image is required"],
    },
    },

    {
        timestamps: true,
    }
);
 

const Product = moongoose.model("Product", productSchema);
export default Product;




