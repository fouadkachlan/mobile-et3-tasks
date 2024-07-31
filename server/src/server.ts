import express , {Request , Response , NextFunction} from "express";
import bodyParser from "body-parser";
import { connectDB } from "./utils/database";
import userRoutes from './Controllers/index'
const cors = require('cors');
const app = express();
const PORT =  3000;
app.use(cors());
app.use(bodyParser.json());

app.use('/api',userRoutes)

connectDB().then(() => {
    app.listen(PORT , () => {
        console.log(`Server is listening on port : ${PORT}`)
    });
}).catch((error) => {
    console.error("Unable to connect to the database." , error);
});