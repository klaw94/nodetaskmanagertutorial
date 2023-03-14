const getTasks = (req, res) => {
  res.status(200).json({ success: true, data: "Many Tasks from the file" })
}

const createTask = (req, res) => {
   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
  res.json({success: true, data: req.body})
}

const getTaskById = (req, res) => {
    res.status(200).json({ success: true, data: "Get specific Task" })
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
