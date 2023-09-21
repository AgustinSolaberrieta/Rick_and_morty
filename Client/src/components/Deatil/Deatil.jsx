import './Deatil.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import imagen from "./imgdelacarta-removebg-preview.png"


const Deatil = () => {
  const {id} = useParams()
  const [character , setCharacter]= useState({})
 
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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
      <div className="myCard">
      <div className="innerCard">
          <div className="frontSide">
            
              <p className="title"><img  className="title"  src={character?.image} alt={character?.name}/></p>
               <p><h2 className="title" >{character?.name}</h2></p>
          </div>
          <div className="backSide"> 
        
              <img src={imagen} alt="" className='foto' />
              <p className="p">{character?.origin?.name}</p>
              <p><h2 className='p'>{character?.status}</h2></p>
              <p><h2 className='p'>{character?.species}</h2></p>
              <p><h2 className='p'>{character?.gender}</h2></p>
              <p><h2 className='p'>{character?.id}</h2></p>
          </div>
      </div>
  </div>
    )  
  }
  export default Deatil 
