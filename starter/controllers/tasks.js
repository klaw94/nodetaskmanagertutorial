const Task = require('../models/Task')

const getTasks = async (req, res) => {
  try{
    const tasks = await Task.find({})
    res.status(200).json({tasks})
  } catch(error){
    res.status(500).json({msg:error})
  }
}

const createTask = async (req, res) => {
  try{
    const task = await Task.create(req.body)
    res.status(201).json({task})
  } catch(error){
    res.status(500).json({msg:error})
  }

}

const getTaskById = async (req, res) => {
  //Get the id and give it the alias taskId
  try{
    const { id: taskId } = req.params
    const task = await Task.findOne({_id: taskId})
    if(!task){
      return res.status(404).json({msg: `No task with id ${taskId}`})
    }
    res.status(200).json({task})

  } catch(error){
    res.status(500).json({msg: error})
  }
   // res.status(200).json({ success: true, data: "Get specific Task" })
}

const updateTask = (req, res) => {
//   const { id } = req.params
//   const { name } = req.body

//   const person = people.find((person) => person.id === Number(id))

//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${id}` })
//   }
//   const newPeople = people.map((person) => {
//     if (person.id === Number(id)) {
//       person.name = name
//     }
//     return person
//   })
   res.status(200).json({ success: true, data: "Update tasks" })
}

const deleteTask = (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id))
//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${req.params.id}` })
//   }
//   const newPeople = people.filter(
//     (person) => person.id !== Number(req.params.id)
//   )
   return res.status(200).json({ success: true, data: "Delete tasks" })
}

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
}
