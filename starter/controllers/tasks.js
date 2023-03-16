const Task = require('../models/Task')
//We can set try and catch in every route, but it is a bit redundant. We build a middleware for this, but there is also prebuilt middleware
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

//This works the same as try catch
//The error is handled in ayncWrapper and in the app.js with the error-handler.js
const getTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getTaskById = asyncWrapper(async (req, res, next) => {
  //Get the id and give it the alias taskId
    const { id: taskId } = req.params
    const task = await Task.findOne({_id: taskId})
    //If the syntax for the id is correct but there is no id with that number, then you get this. 
    if(!task){
      return next(createCustomError('Not found', 404))
    }
    res.status(200).json({task})
})

const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true, 
      runValidators: true,
    })
    if(!task){
      return next(createCustomError('Not found', 404))
    }
    res.status(200).json({task})
})

const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndDelete({_id: taskId})
    //If the syntax for the id is correct but there is no id with that number, then you get this. 
    if(!task){
      return next(createCustomError('Not found', 404))
    }
    res.status(200).json({task: null, status: "success"})
})

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
}


/*
How the function used to look with try and catch
const getTasks = asyncWrapper(async (req, res) => {
  try{
    const tasks = await Task.find({})
    //Success is a bit redundant if you have a front end because if it works you see it
    // and if you use axios it automatically return the data property. 
    //    res.status(200).json({tasks})
    res.status(200).json({tasks, status:"success", amount: tasks.length})
  } catch(error){
    res.status(500).json({msg:error})
  }
})


Before our custom error: 
    if(!task){
      const error = new Error('Not found')
      error.status = 404
      //sends it to the error handler
      return next(error)
    }
*/