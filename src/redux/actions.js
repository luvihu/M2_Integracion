export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

// los de estas lineas arriba son las actions types

export const addFavorite = (character) => {
  return { type: ADD_FAVORITE, payload: character };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
// estas de arriba son las action creator

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (orden) => {
  return { type: ORDER, payload: orden};
};