const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const exerciseSchema = new Schema ({


    username:{type:String,required:true},
    description:{type:String,required:true},
    duration:{type:Number, required:true},
    date:{type:Date, required:true},
    
    timestamps:true 

 })


 const exerciseRouter = require('./routes/exercises');
 const usersRouter = require('./routes/users');

 app.use('/exercises',exerciseRouter);
 app.use('/users',usersRouter);

const Exercise = mongoose.model('Exercise', exerciseSchema);


module.exports = Exercise;