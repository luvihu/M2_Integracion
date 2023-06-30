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

   //if (data.name && !characters.find((charater) => charater.id === data.id))

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         } 
      });
   }, [myFavorites]);
   
   
   return (
      <div className={style.cardConten}>
         <div className={style.imageConten}>
         <button className={style.fav} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
                    <Link to={`/detail/${id}`}>
            <h2 >{name}</h2>
            </Link>
          <img src={image} alt={name}/> 
          
        </div>
        <div className={style.atrib}>
         <div className={style.closeButn}>
        <button  onClick={()=>onClose(id)}>X</button>
         </div>
         <h2>Especie: {species}</h2>
         <h2>Género: {gender}</h2>
             
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

