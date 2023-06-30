import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

 
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
// esta linea sirve para conectar nuestra app con la extension REDUX DEVTOOLS DEL NAVEGADOR
// para usar esta variable tambien se debe importar el compose de redux, y usarlo en la variable store de abajo

 

  const composeEnhancer = composeWithDevTools({
    trace: true,
});
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
  // esta linea sirve para que podamos hacer peticiones a una Api/servidor
);

export default store;

