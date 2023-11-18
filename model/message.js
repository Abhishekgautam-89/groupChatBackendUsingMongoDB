const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Message = new Schema({
    message:{
        type: String,
        required:true
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    groupId:{
        type:Schema.Types.ObjectId,
        ref:'Group'
    }
});

module.exports = mongoose.model('Message', Message)