const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NotesSchema = new Schema({
    user:{
        type: Schema.ObjectId,
        ref: 'User'
    },
    title:{
        type:'String',
        required: true,
    },
    image: {
        type: String,
        required: 'This field is required.'
    },
    body:{
        type:'String',
        required: true,
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    updatedAt:{
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Note', NotesSchema);
