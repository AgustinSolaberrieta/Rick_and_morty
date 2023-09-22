const  axios  = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"                                                                                                                                                                                                                                                                                     


const  getCharById = async (request, response)=>{
  try {
    const { id } = request.params

    const { data } = await axios(`${URL}${id}`)
   

    // let character = new Object;
   if(!data.name) throw new Error(`Faltan datos del personaje con Id: ${id}`)
        if(data){ 
          character = {
          id : data.id,
          status: data.status,
          name: data.name,
          species: data.species,
          origin: data.origin.name,
          image: data.image,
          gender: data.gender
        }
            return response.status(200).send(character)
        }
     

  }catch (error) {
    return error.message.includes('ID')
   ? response.status(404).send(error.message)
    :response.status(500).send(error.response.data.error)
          // return response.status(500).send(JSON.stringify())
      }

} 

module.exports =  getCharById ;

