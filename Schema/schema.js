
import mongoose from "mongoose";




// user 
const user_schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

// profile schema 
const profile_schema = new mongoose.Schema({
    userName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profileUrl: { type: String, required: true },
    email: { type: String, required: true, unique: true }
}
    , { timestamps: true });

export {
  profile_schema, user_schema
};
