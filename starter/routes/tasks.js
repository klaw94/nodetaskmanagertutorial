const express = require('express')
const router = express.Router()

const {getTasks, getTaskById, createTask, updateTask, deleteTask} = require('../controllers/tasks')

//We take the functions to a new folder (controllers) to make it cleaner
//You dont need to send req and res, they send automatically

router.get('/', getTasks)
  
router.post('/', createTask)

router.get('/:id', getTaskById)
  
//We use patch because with patch you dont need to send all the params, you can send one param and only that will be updated. 
//Put replaces the item and if you forget to send a property it just disappears. 
//You write patch and put exactly the same. But put needs overwrite as a property too. 
router.patch('/:id', updateTask)
  
router.delete('/:id', deleteTask)

//another way. See in 15-router-controller:
//router.route('/').get(getPeople).post(createPerson)
//router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router