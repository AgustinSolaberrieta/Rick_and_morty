 import Card from "../Card/Card" 
import { connect,useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../Redux/action"
import { useEffect, useState } from "react"
 
const Favorites = ({myFavorites}) => {

    const dispatch = useDispatch()
    
    const [characters, setcharacter]= useState([])
   
    useEffect(()=> {
        setcharacter(myFavorites)
     },[myFavorites])
   
    const handleOrder = (event) => {
     dispatch(orderCards(event.target.value))
        //  setAux(aux)
    }
   
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
       }
    
   

    return(
        <div>
             <select onChange={handleOrder}>
                <option value= 'A'>Ascendente</option>
                <option value= 'D'>Desendente</option>
             </select>

             <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                 <option value="unknown">unknown</option>
                 <option value="allCharacters">All Characters</option>
             </select>
        {
            characters?.map(fav => {
                return(
            
                   
                    <Card
                    key= {fav.id}
                    id= {fav.id}
                    name={fav.name}
                    origin={fav.origin}
                    species= {fav.species}
                    image= {fav.image}
                    onClose={fav.onClose}
                    />
                )
            
            })
        }
     </div>
    )

}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
   }
}

export default connect (
    mapStateToProps,
    null
)(Favorites)