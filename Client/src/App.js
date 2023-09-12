import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav'
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites';
import { useState , useEffect} from 'react';
import axios from 'axios';
import { Routes , Route, useLocation, useNavigate } from "react-router-dom"


// const email= 'tete@gmail.com';
// const password = '12345';
 const URL = 'http://localhost:3001/rickandmorty/login';
function App() {
   const location= useLocation()
   const navigate= useNavigate()
   const [characters,setCharacters]= useState([])
   const [access, setAccess] = useState(false);
   

  async function login(userData) {
     
      try{
     const { email, password } = userData;
     const {data}= await axios(`${URL}?email=${email}&password=${password}`)
         setAccess(data);
         access && navigate('/home');
      }catch (error){
         console.log(error.message)
      }
   }

  useEffect(()=>{
   !access && navigate('/')
  },[access, navigate])


  const onSearch = async (id) => {
   try {
       const { data }= await axios(`http://localhost:3001/rickandmorty/character/${id}`)
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       }   
   } catch (error) {
      
         alert('¡No hay personajes con este ID!');
       
   }

  
 }


   // function onSearch(id) {
   //    axios(`http://localhost:3002/rickandmorty/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }
const onClose = (id) =>{
      var num = Number(id)
     let  charactersFilter= characters.filter((numero)=> numero.id !== num ) 
        setCharacters(charactersFilter)

   }
   
   
   
  




   return (
      
      <div className='App'>
         {
         location.pathname !== "/" && <Nav onSearch= {onSearch}setAccess={setAccess} />
         }

        <Routes>
          <Route path='/' element={<Form login={login}/>}/>
          <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/detail/:id' element={ <Deatil/> }/>
          <Route path='/favorites'element={<Favorites/>} />
        
        </Routes>

      
      </div>
     
   );
}

export default App;
