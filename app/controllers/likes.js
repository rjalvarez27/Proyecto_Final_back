const modelLikes = require("../models/likes"); 

//Crear un like para una publicacion

const createLikes = async (req, res) => {
  try {
    const {id_publication, id_user, like} = req.body;
    const value = await modelLikes.create({
       id_publication,
       id_user,
       like
    });
    res.status(200).json({ message: "Like creado", value });
  } catch (error) {
    res.status(404).json({ message: "Error al crear un like" });
  }
};

// obtener todos los likes
const getlikes = async (req, res) => {
  const value = await modelLikes.find();  
  res.status(200).json(value);
};  


// obtener un solo like por publicacion

const getlikeUser = async (req, res) => {
  try {
    const id_publication = req.params.id;  
    const like = await modelLikes.findOne({id_publication});
    console.log(like)
    if (!like) {
      return res.status(404).json({ message: "no encontrado" });  
    }  
    res.json(like);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener Informacion" });  
  }  
};  


// Ruta para borrar un like por publicacion
const likeDelete = async (req, res) => {
  try {
    const id_publication = req.params.id;  
    console.log(id_publication)
    const deletelike = await modelLikes.deleteOne({id_publication});
    if (!deletelike) {
      return res.status(404).json({ message: "no encontrado" });
    }
    res.json({ message: "Eliminado", deletelike });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = {createLikes,getlikes,getlikeUser,likeDelete}