
import express from "express";


// callback function of routes 
import {
  get_profile, set_profile

} from "../Controller/controller.js";

const routes = express.Router();



// user profile set 
routes.route("/profile").post(set_profile).get(get_profile)


// get user 

export default routes;


