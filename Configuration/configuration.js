import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import {
  auth_schema, profile_schema, user_schema
} from "../Schema/schema.js";

mongoose.connect(process.env.MONGO_URI).then(() => {
    // moongoose url to connect 
    console.log("✅ MongoDB Connected");
}).catch((error) => {
    console.log('❌ MongoDB Connection Error:', error);
});

// list  of mongoose model 

const profile_model = mongoose.model("profile", profile_schema);
const user_model = mongoose.model("signdata", user_schema);

export {

 profile_model ,
 user_model ,
};
