const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = new Schema({
    GroupName:{
        type:String,
        required: true
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
});
module.exports=mongoose.model('Group', Group)