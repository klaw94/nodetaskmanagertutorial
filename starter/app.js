const express = require('express')
const app = express()

const tasks = require('./routes/tasks')


const port = 3000

//static access
app.use(express.static('./public'))
//In order to get the data in the body of the requests you need a middleware. This one is built for us but we can 
//also build it ourselves. 
//ORDER MATTERS!!!!
app.use(express.json());
//name api/v1 is convention
app.use('/api/v1/tasks', tasks)




app.get('/hello', (req, res)=>{
    res.send("Task Manager App")
})



app.listen(port, () => {
  console.log('Server is listening on port 3000....')
})