const avatarModel = require('../models/avatar');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})