import Card from '../card/Card';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions.js';
import { useState } from 'react';



  const  Favorites =({myFavorites})=>{

    const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event)=>{
    dispatch(orderCards(event.target.value));
      setAux(true);
  }

  const handleFilter = (event)=>{
        
      dispatch(filterCards(event.target.value));
    }
    
  return (
    <>
    <select onChange={handleOrder} >
      <option value="A">Ascendente</option>
      <option value="D">Descendente</option>
    </select>
    <select onChange={handleFilter}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">unknown</option>
      <option value="allCharacters">allCharacters</option>
    </select>
    {
      myFavorites?.map((fav)=>{
        return (
          <Card 
                   key={fav.id}
                   id={fav.id}
                   name={fav.name}
                   status={fav.status}
                   species={fav.species}
                   gender={fav.gender}
                   origin={fav.origin.name}
                   image={fav.image}
                   onClose={fav.onClose}
                   />
        )
        })
    }
    </>
  )
}

const mapStateToProps = (state)=>{
  return {
    myFavorites: state.myFavorites
 }
}
export default connect(mapStateToProps, null)(Favorites);