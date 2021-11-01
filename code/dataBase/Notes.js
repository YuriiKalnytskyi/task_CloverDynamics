const { Schema, model } = require('mongoose');

const notesSchema = new Schema({
    title:{
        type: String,
        require: true
    }

},{ timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } })

module.exports = model('Notes', notesSchema);
