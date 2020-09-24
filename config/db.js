const mongoose = require('mongoose');
// const config = require('config');
const keys = require('./dev')


const connectDB = async () => {
    try{
        await mongoose.connect(keys.mongoURI, {
            useNewUrlParser: true 
        });

        console.log("mongodb connected")
    } catch (err){
        console.error(err.message);
        process.exit(1)
    }
}

module.exports = connectDB