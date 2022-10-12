const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./database/index");
const UserRoute = require("./routers/User");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

//database Connections
db.sequelize.sync().then(()=> {
    console.log("Sync db");
}).catch((err)=>{
 console.log(err);
})

// db.sequelize.sync({ force: true}).then(()=> {
//     console.log("dropped tables");
// })

//middlewares
app.use(express.json());
app.use(cors({origin: "*"}))
//routers
app.use('/api/user', UserRoute);

app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})



