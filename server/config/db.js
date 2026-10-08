import moongoose from "mongoose";

const connectDB = async () => {
     
    try {
        await moongoose.connect(process.env.MONGO_URI,);
        console.log("MongoDB Atlas connected");
    }  catch (error) {
        console.error("MongoDB Atlas connection failed:", error.message);
        process.exit(1);
    }


};

export default connectDB;