import './Deatil.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Deatil = () => {
  const {id} = useParams()
  const [character , setCharacter]= useState({})
 
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]); 
  return(
      // <div className="myCard">
      // <div className="innerCard">
      //   <h2 className='p' >{character?.origin?.name}</h2>
      //   <img  className="title"  src={character?.image} alt={character?.name}/>
      //    </div>
      
      //  <div className="backSide">
      //   <h2 class="title" >{character?.name}</h2>
      //   <h2 className='p'>{character?.status}</h2>
      //   <h2 className='p'>{character?.species}</h2>
      //   <h2 className='p'>{character?.gender}</h2>
      //   </div>
        
      // </div>
      <div class="myCard">
      <div class="innerCard">
          <div class="frontSide">
              <p class="title"><img  className="title"  src={character?.image} alt={character?.name}/></p>
              <p><h2 class="title" >{character?.name}</h2></p>
          </div>
          <div class="backSide">
              <p class="title">{character?.origin?.name}</p>
              <p><h2 className='p'>{character?.status}</h2></p>
              <p><h2 className='p'>{character?.species}</h2></p>
              <p><h2 className='p'>{character?.gender}</h2></p>
              
          </div>
      </div>
  </div>
    )  
  }
  export default Deatil 
