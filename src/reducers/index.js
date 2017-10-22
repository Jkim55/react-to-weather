import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'


const rootReducer = combineReducers({
  weather: WeatherReducer    // this sets up weather on this.state with the data returned from WeatherReducer
});

export default rootReducer;
