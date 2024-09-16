const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/users');

const user_schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
const user_model= mongoose.model('user_table',user_schema);

module.exports=user_model;