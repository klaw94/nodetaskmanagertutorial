const mongoose = require('mongoose')

//This will set the structure of our data. Go to mongoosejs.com/docs/schematypes.html to see all the types
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength:[20, 'name cannot be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})


module.exports = mongoose.model('Task', TaskSchema)