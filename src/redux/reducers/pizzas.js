const initialState = {
  pizzas: [],
  isLoaded: false,
}

const pizzas = (state = initialState, action) => {
  action = {
    type: 'SET_SORT_BY',
    payload: 'price'
  }
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      pizzas: action.payload,
    }
  }
  return state;
}

export default pizzas;