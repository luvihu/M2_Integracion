import { useState } from "react";
import style from './searchBar.module.css';

export default function SearchBar({onSearch}) {

   const [id, setId]= useState("");

   const handleChange = (event)=>{
      event.preventDefault();
      let eject = event.target.value;
       setId(eject);
   }
   return (
      <div className={style.searchConten}>
         <input className={style.searchInp} type='text' onChange={handleChange} value={id} />
         <button className={style.searchBtn} onClick={()=>{onSearch(id); setId('')}}>Agregar</button> 
      </div>
   );
}

//agrego en la propiedad Onclick, setId('') para que se borre el valor ingresado en el 
//input una vez renderizado el valor en el browser. 
// setId('') esta funcion es para q quede vacío el input una vez se busque la info
