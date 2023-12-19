const express= require( 'express');
const mongoose=require("mongoose") ;
const dotenv=require("dotenv");
const userrouter=require("./Routes/user.route"); // Ensure this path is correct
const cookieParser=require("cookie-parser") ;

dotenv.config();

mongoose
    .connect(process.env.MONGO, {
    })
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((err) => {
        console.log(err);
    });
const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = 4000; // Change this to the desired port number

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});

app.use('/api/user', userrouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
