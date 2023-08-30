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


const email= 'tete@gmail.com';
const password = '12345';

function App() {
   const location= useLocation()
   const navigate= useNavigate()
   const [characters,setCharacters]= useState([])
   const [access, setAccess] = useState(false);
   

   const login = (userData) => {
      if (userData.password === password && userData.email === email) {
         setAccess(true);
         navigate('/home');
      }
   }

  useEffect(()=>{
   !access && navigate('/')
  },[access, navigate])


   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
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
