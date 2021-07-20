const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const UsuarioSchema = mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);