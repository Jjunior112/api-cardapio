const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const TypeModel = mongoose.model('types', typeSchema);

module.exports = TypeModel