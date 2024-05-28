const MessageSchema = require("../models/message"); 

const postMessages = async (req, res) => {
    const message = new MessageSchema({
        message: req.body.message,
        from: req.body.from
    })
    
    console.log(message)
    message.save((error, messageStored) =>{
        if(error || !messageStored){
            return res.status(404).send({
                status: 'error',
                message: 'No ha sido posible guardar el mensaje'
            })
        }
        return res.status(200).send({
            status: 'success',
            messageStored
        })

    })
};

const getMessages = async (req, res) => {
    const query = await Message.find({})

    query.sort('-_id').exec((error, messages) => {
        if(error){
            return res.status(500).send({
                status: "error",
                message: "Error al extraer los datos"
            })
        }

        //Si no existen artículos:
        if(!messages){
            return res.status(404).send({
                status: "error",
                message: "No hay mensajes para mostrar"
            })
        }

        return res.status(200).send({
            status: "success",
            messages
        })

    })
}

module.exports = { postMessages, getMessages}