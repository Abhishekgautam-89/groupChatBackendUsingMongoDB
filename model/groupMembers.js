const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupMember = new Schema({
    groupId:{
        type:Schema.Types.ObjectId,
        ref:'Group'
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    isAdmin:{
        type:Boolean,
        required:true
    }
});

module.exports = mongoose.model('GroupMember', GroupMember )