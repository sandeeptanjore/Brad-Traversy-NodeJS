const mongoose = require('mongoose');
// const connectDB = async () => {
//   const conn = await mongoose.connect(process.env.MONGO_URI, {
//     //useNewUrlParser:true,
//     // useCreateIndex: true,
//     // useFindAndModify: false,
//     useUnifiedTopology:true
//   });
//   console.log(`MongoDB Connected: ${conn.connection.host}`);
// }

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;