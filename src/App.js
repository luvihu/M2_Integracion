import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import logoRM from './img/logoRM.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import LoginForm from './components/loginForm/loginForm';
import Favorites from './components/favorites/favorites.jsx';




function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();
   let [access, setAccess] = useState(false);

   const EMAIL = 'luvillogas@gmail.com';
   const PASSWORD = 'hola1379';

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(response => response.data)
         .then((data) => {
            if (data.name && !characters.find((charater) => charater.id === data.id)) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }
   // id es lo q escribe el usuario
   // axios es una libreria, similar al fetch
   // se instala en la carpeta npm i axios

   const onClose = (id) => {
      let deleted = characters.filter((elem) => elem.id !== Number(id))
      setCharacters(deleted);
   }

   function randomHandler() {
      let haveIt = [];

      let random = (Math.random() * 826).toFixed();

      random = Number(random);

      if (!haveIt.includes(random)) {
         haveIt.push(random);
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
            .then((response) => response.json())
            .then((data) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert("No hay personajes con ese ID");
               }
            });
      } else {
         console.log("Ya agregaste todos los personajes");
         return false;
      }
   }


   function loginHandler(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }


   useEffect(() => {
      !access && navigate('/');
   }, [access]);



   return (
      <div className='App'>
         <img className="logo" src={logoRM} alt="logo-Rick-Morty" />

         {location.pathname !== "/" && <Nav onSearch={onSearch} random={randomHandler} setAccess={setAccess}></Nav>}

         <Routes>
            <Route path='/' element={<LoginForm login={loginHandler} />}></Route>
            <Route path='/home'
               element={<Cards characters={characters} onClose={onClose} />} ></Route>
            <Route path='/about' element={<About />} ></Route>
            <Route path='/favorites' element={<Favorites />} ></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='*' element={<Error />}></Route>
         </Routes>


      </div>
   );
}

export default App;
