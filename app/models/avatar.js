const mongoose = require('mongoose');

const avatarSchema = new mongoose.Schema({
   id_user:{
       type: String,
       require: [true, 'id de usuario es necesario'],
   },
    avatar: {
        type: String,
        require: [true, 'Ingrese imagen de perfil'],
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('avatar', avatarSchema)