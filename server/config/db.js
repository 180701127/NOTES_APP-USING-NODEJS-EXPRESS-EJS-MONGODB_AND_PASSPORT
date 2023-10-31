// const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);
// const connectDB = async()=>{
//     try{
//         const conn = await mongoose.connect(process.env.MONGODB_URI);
//         console.log(`MongoDB Database Connected: ${conn.Connection.host}`);

//     } catch(error){
//         console.log(error);

//     }
// }

// module.exports = connectDB;

const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGODB_URI) 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectDB