import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from './actions.js';


const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, action.payload],
        allCharactersFav: [...state.allCharactersFav, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== action.payload)
      }

    case FILTER:
      const filterFavor = state.allCharactersFav.filter((char) =>
        char.gender === action.payload);

      return {
        ...state,
        myFavorites: action.payload === 'allCharacters'
          ? [...state.allCharactersFav]
          : filterFavor
      };

    case ORDER:
      const orderFavor = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites: action.payload === 'A'
          ? orderFavor.sort((a, b) => a.id - b.id)
          : orderFavor.sort((a, b) => b.id - a.id)
      };

    default:
      return { ...state };
  }
};

export default rootReducer;