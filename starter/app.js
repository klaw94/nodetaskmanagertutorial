const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
//To access the secret variables
require('dotenv').config()


const port = 3000

//static access
app.use(express.static('./public'))
//In order to get the data in the body of the requests you need a middleware. This one is built for us but we can 
//also build it ourselves. 
//ORDER MATTERS!!!!
app.use(express.json());
//name api/v1 is convention
app.use('/api/v1/tasks', tasks)
//Middleware for routes that don't exist.
app.use(notFound)
//To handle errors without try and catch 
app.use(errorHandlerMiddleware)


app.get('/hello', (req, res)=>{
    res.send("Task Manager App")
})

//We are gonna start the connection to the DB and only if we succeed we are going to connect to the server
const start = async () => {
  try{
    //we use await because it returns a promise. (Check the .then in connect.js)
    //We use the secret of the .env
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log('Server is listening on port 3000....')
    })
  }catch (error){
    console.log(error)
  }
}

start()
