const {User} = require('../DB_connection.js');

 const postUser = async (req, res)=>{
    try {
        const {email, password} = req.body

    if (!email || !password) return res.status(400).send("Faltan Datos")

    // const user= await User.findOrCreate(
    //     {where: {
    //         email, 
    //         password
    //     }})
    const [user, created] = await User.findOrCreate({
        where:{ 
         email ,
         password }
      });
      
      if (!created) {
        res.status(400).send( "El usuario ya existe" );
      }  

     res.status(200).json(user)

    } catch (error) {
         return res.status(500).json({error: error.message}) 
    }
    }
    module.exports= postUser