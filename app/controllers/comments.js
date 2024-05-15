const commentModel = require('../models/comments')

// OBTENER COMENTARIO
const getComment = async (req, res) => {
    const comment = await commentModel.find();
    res.status(200).json(comment);
}

// AGREGAR COMENTARIO
const newComment = async (req, res) =>{
    try{
        const {author, content, image} = req.body;

        const comment = await commentModel.create({
            author,
            content,
            image 
        });
        res.status(201).json(comment);
    }catch(error){
        res.status(500).json({message: error.message})
        
    }
}

// AGREGAR FUNCION A PREMIUM
// EDITAR COMENTARIO

const updateComment = async (req, res) => {
    try{
        const { id } = req.params;
        const { content, image } = req.body;
        const updateComment = await commentModel.findByIdAndUpdate(id, {content, image});

        if(!updateComment){
            return res.status(404).json({error: error.message});
        }
        res.status(200).json({message: 'Comentario actualizado', updateComment});

    }catch(error){
        res.status(404).json({message: error.message});
    }
}

// ELIMINAR COMENTARIO

const deleteComment = async (req, res) => {
    try{
        const id = req.params.id;
        const deleteComment = await commentModel.findByIdAndDelete(id);
        
        if(!deleteComment){
            return res.status(404).json({error: error.message});
        }
        res.status(200).json({message: 'Comentario eliminado'});

    }catch(error){
        res.status(404).json({message: error.message});
    }
}

module.exports = { getComment, newComment , updateComment , deleteComment}