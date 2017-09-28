const initial_state = {
  colorZero: []
}

const lightstatus = (state = initial_state, action) => {
  switch (action.type) {
    case 'ADD_COLOR_ZERO':
      state.colorZero = action.arr;
      return Object.assign({}, state);
    default:
      return state;
  }
}

export default lightstatus
