import { combineReducers } from 'redux'
import currentHotelReducer from './currentHotelReducer'
import currentCityReducer from './currentCityReducer'
import currentCountryReducer from './currentCountryReducer'

const rootReducer = combineReducers({
    currentHotel: currentHotelReducer,
    currentCity: currentCityReducer,
    currentCountry: currentCountryReducer
})

export default rootReducer; 