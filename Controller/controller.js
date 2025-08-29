import {

    profile_model,

} from "../Configuration/configuration.js";
// importing models 

import dotenv from "dotenv";


dotenv.config();



//  set profile
const set_profile = async (req, resp) => {
    const { userName, firstName, lastName, profileUrl, email } = req.body;
    const data = await profile_model.create({
        userName: userName, firstName: firstName, lastName: lastName, profileUrl: profileUrl, email: email,
    });
    resp.status(200).json({ status: true, message: 'profile created !' });
    console.log(data);
    if (!userName && !firstName && !lastName && !profileUrl && !email) {
        resp.status(403).json({ message: 'Invalid Input' });
    }
}
// get profile 
const get_profile = async (req, resp) => {
    const { email } = req.body;
    const userProfile = await profile_model.find({ 'email': email });
    resp.status(200).json(selldata);
};








export {
    signup, signin,
    get_profile, set_profile
};



