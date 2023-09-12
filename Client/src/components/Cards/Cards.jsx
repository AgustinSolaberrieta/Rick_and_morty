import "./Cards.css"
import Card from '../Card/Card';
// tengo que mostar una card por cada objeto que me pasan osea serian 5
export default function Cards({characters, onClose}) {
  
   return (
   <div className='cartas-container'>
     {// recorre y pega (le paso por parametro las prpiedades de card)
      characters.map(({id, name, status,species,gender,origin,image}) =>{
         return(
            <div className='cartas'>
            <Card 
            key={id}//la key sirve para identificar a cada plantilla con su id(este es un numero)
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            onClose={onClose}
            />
            </div>
         )
      }
      
    )
     }
     
   </div>
   );
}
