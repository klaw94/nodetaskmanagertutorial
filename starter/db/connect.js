const mongoose = require('mongoose')

//This link I got from MongoDB and I add my password. After .net/ I add the name of the DB that I want to create.
//This is dangerous, because if you push this to the repo, everyone can still your data. 
//To fix this, we install dotenv and add .env in git ignore. THEN create a .env file
//This string is no longer needed
// const connectionString = 'mongodb+srv://clausaji31:dIu98h2KaG9nElFj@cluster0.te0ingb.mongodb.net/03-TASK-MANAGER-TUTORIAL?retryWrites=true&w=majority'

const connectDB = (url) => {
   mongoose
        .connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
}

module.exports = connectDB



//In MongoDB collections are tables and documents are rows.
//You can have different types of documents in each collection, but you shouldn't.
//Mongoose will set a structure for you. Mongoose does the heavy lifting for us!!! <3

//This is the last version. But the version above is better
//The {useNew... } is only necessary if you use mongoose 5. From 6 on it is no longer necessary
// mongoose
//     .connect(connectionString, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true,
//     })
    // .then(()=>console.log('CONNECTED TO DB!!!!...'))
    // .catch((err)=>console.log(err))

