import axios from 'axios';

export const addFav = (character) => {
   return (dispatch) => {
     // Tu lógica asincrónica aquí
     axios.post('http://localhost:3001/rickandmorty/fav', character)
       .then((response) => {
         dispatch({
           type: 'ADD_FAV',
           payload: response.data,
         });
       })
       .catch((error) => {
         console.error('Error adding favorite:', error);
       });
   };
 };
export const removeaddFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
try {
   
    const {data}= await axios.delete(endpoint)
   
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
      });
   
   
 } catch (error) {
   console.log( error.message); 
 }

  };  
}

export const filterCards = (gender) => {
 return{type: "FILTER_CARDS", payload: gender}
}

export const orderCards = (order) => {
    return{type: "ORDER_CARDS", payload: order}
}
