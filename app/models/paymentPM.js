const mongoose = require('mongoose');

const pagomovilSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String
    } // USAR STRIPE/
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('publicaciones', pagomovilSchema)