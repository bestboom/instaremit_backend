import express from  "express"
import helmet from "helmet";
import  dotenv from  "dotenv";

import routes from "./routers/routes.js";

// config
 dotenv.config();

const app = express();

// Middleware

app.use(express.json());
app.use(helmet()); // hide inter part
app.use("/api", routes);


// Basic route
app.get('/', (req, res) => {
    res.send('API is running...');
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
