const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model('Document', DocumentSchema);