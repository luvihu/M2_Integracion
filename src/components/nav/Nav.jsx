import React from "react";
import SearchBar from "../searchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch, random, setAccess,})=>{ 

   
  const handleLogout = ()=>{
      setAccess(false);
     
  }
  
  return (
    <div className="navConten">
<div>
    <SearchBar onSearch={onSearch}/>
    <button className="random" onClick={random}>
        ADD RANDOM
      </button>
</div>
 <div>
    
    <NavLink to='/about'><button>About</button></NavLink>
    <NavLink to='/home'><button>Home</button></NavLink>
    <NavLink to='/favorites'><button>Favorites</button></NavLink>
    <button onClick={()=>handleLogout()}>Logout</button>
  </div>
    </div>
  )
}

export default Nav;

