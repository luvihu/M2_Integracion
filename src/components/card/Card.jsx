import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './card.module.css'
import { connect} from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions';


 function Card({id,name, status,species, gender, origin, image, onClose, addFavorite, removeFavorite, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = ()=> {
      if(isFav) {
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({id,name, status,species, gender, origin, image, onClose});
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   
   return (
      <div className={style.cardConten}>
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
         <div className={style.imageConten}>
          <img className={style.imageI} src={image} alt={name}/> 
          <button className={style.closeButn} onClick={()=>onClose(id)}>X</button> 
          <Link to={`/detail/${id}`}>
            <h2 className={style.name}>{name}</h2>
            </Link>
        </div>
        <div className={style.atrib}>
         <h2>Especie: {species}</h2>
         <h2>Género: {gender}</h2>
         <h2>Origen: {origin}</h2>
         <h2>Estatus: {status}</h2>
         
         </div>
      </div>
   );
}    

const mapDispatchToProps = (dispatch) =>{
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },

      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      },
   }
};

const mapStateToProps = (state)=>{
   return {
      myFavorites: state.myFavorites,
   }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Card);    

