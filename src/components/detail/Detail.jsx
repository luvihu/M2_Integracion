
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import './detail.css';

export default function Detail() {

const {id}= useParams();
const [character, setCharacter] = useState({});

useEffect(() => {
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
     if (data.name) {
        setCharacter(data);
     } else {
        window.alert('No hay personajes con ese ID');
     }
  })
  .catch((err) => {
    window.alert("No hay personajes con ese ID");
  });
  return setCharacter({});
}, [id]);

  return (
    <div className='detailConten'>
      <div className='imgConten'>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.image} />
      </div>
      <div className="details">
      <div>
          <h3>Species:</h3>
          <p>{character.species}</p>
        </div>
        <div>
          <h3>Gender:</h3>
          <p>{character.gender}</p>
        </div>
        <div>
          <h3>Status:</h3>
          <p>{character.status}</p>
        </div>
        <div>
          <h3>Origin:</h3>
          <p>{character.origin?.name}</p>
        </div>
         </div>
    </div>
  );
}
 // operador de encadenamiento opcional '?', llama a un objto ó func. en objetos anidados,más inf en mdn
 // character.origin && character.origin.name , es lo mismo q escribir esto