import Card from '../card/Card.jsx';
import style from '../cards/cards.module.css';

export default function Cards({characters, onClose}) {
   
   
   return (
      <div className={style.cardsItem}> 
      {characters?.map(({id, name, status,species, gender, origin, image})=>{
   
       return <Card 
                   key={id}
                   id={id}
                   name={name}
                   status={status}
                   species={species}
                   gender={gender}
                   origin={origin.name}
                   image={image}
                   onClose={onClose}
                   />
})
   }
   </div>
   );
}
