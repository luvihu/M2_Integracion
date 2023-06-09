

export default function validate(userData) {

    
  let errors = {};

 
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email = "Invalid email";
  }

  if(!userData.email) {
    errors.email = "Ingrese su email"
  }
  if (!userData.password) {
   errors.password = "Ingrese su password";
  }

  if(userData.email.length >35) {
    errors.email = "El email no puede tener mas de 35 caracteres";
  }

   if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "El password debe tener al menos un número"};
  //}  ESTO LO AGREGO CUANDO YA HAYA UNA DATA DE REGISTRO

   if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Pasword tiene que tener una longitud entre 6 y 10 caracteres"
  }
  
  return errors;
}