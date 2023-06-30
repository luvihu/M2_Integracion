import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import LoginForm from './components/loginForm/LoginForm';
import Favorites from './components/favorites/Favorites.jsx';
import { removeFavorite } from './redux/actions';
import { useDispatch } from 'react-redux';





function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();
   let [access, setAccess] = useState(false);
   const dispatch = useDispatch();


   const EMAIL = 'luvillogas@gmail.com';
   const PASSWORD = 'hola1379';

   function onSearch(id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then(response => response.json())
         .then((data) => {
            if (data.name && !characters.find((charater) => charater.id === data.id)) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         });
   }
   // id es lo q escribe el usuario
   // axios es una libreria, similar al fetch
   // se instala en la carpeta npm i axios
   // !characters.find((charater) => charater.id === data.id), no se repita los elem llamados

   const onClose = (id) => {

     let deleted = characters.filter((elem) => elem.id !== Number(id))
      
      setCharacters(deleted);
      dispatch(removeFavorite(id));

   }

   function randomHandler() {
      let haveIt = [];

      let random = (Math.random() * 826).toFixed();
      // toFixed(); devuelve nro. redondeado, si colocas algn nro dentro del parentesis, devuelve entero con cantidad de nros decimales.

      random = Number(random);

      if (!haveIt.includes(random)) {
         haveIt.push(random);
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
            .then((response) => response.json())
            .then((data) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  alert("No hay personajes con ese ID");
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
        
         {location.pathname !== "/" && <Nav onSearch={onSearch} random={randomHandler} setAccess={setAccess}></Nav>}

         <Routes>
            <Route path='/' element={<LoginForm loginHandler={loginHandler} />}></Route>
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
