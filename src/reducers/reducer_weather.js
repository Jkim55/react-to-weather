import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state] // always rtn a new piece of state; DO NOT mutute, ie state.push(action.payload.data)
  }
  return state
}
