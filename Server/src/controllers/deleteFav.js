const {Favorite} = require('../DB_connection.js');

const delateFav = async (req,res)=>{
    try {
        const { id } = req.params;
    
    const allFavorites= await Favorite.destroy({
        where:
             id
        })

      if(allFavorites === 0 ){
        res.status(404).send("Personaje favorito no encontrado")
      }  

      const userfavorite= await Favorite.findAll()

    return res.status(200).json(userfavorite)
 
    

    } catch (error) {
         return res.status(500).json({error: error.message}) 
    }
}
module.exports= delateFav;