import express , {Request , Response , NextFunction} from "express";
import bodyParser from "body-parser";
import { connectDB } from "./utils/database";
import userRoutes from './Controllers/index'
import { DatabaseStatus, ServerStatus } from "./Constant/Message";




const cors = require('cors');
const app = express();
const PORT =  3000;
app.use(cors());
app.use(bodyParser.json());

app.use('/api',userRoutes)

connectDB().then(() => {
    app.listen(PORT , () => {
        console.log(`${ServerStatus.Success.serverListening}:${PORT}`)
    });
}).catch((error) => {
    console.error(DatabaseStatus.Fail.databaseConnectionError);
});