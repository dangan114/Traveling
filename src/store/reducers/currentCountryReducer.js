import { SET_COUNTRY, SET_COUNTRY_CODE, ADD_COUNTRY_CITY, SET_COUNTRY_NAME, RESET_COUNTRY } from "../constants/actionTypes";

const initialState = {
    name: '',
    code: '',
    cities: []
}

const currentLocation = (state = initialState, action) => {
    switch (action.type) {
        case RESET_COUNTRY:
            return initialState;
        case SET_COUNTRY:
            return Object.assign({}, state, action.payload)
        
        case SET_COUNTRY_NAME:
            return {
                ...state,
                name: action.payload
            }
        case SET_COUNTRY_CODE:
            return {
                ...state,
                code: action.payload
            }

        case ADD_COUNTRY_CITY:
            const index = state.cities.findIndex(city => city.name === action.payload.name)
            if (index != -1) {
                return {
                    ...state,
                    cities: [
                        ...state.cities.slice(0, index),
                        {
                            name: action.payload.name,
                            hotels: [...action.payload.hotels]
                        },
                        ...state.cities.slice(index + 1)
                    ]

                }
            } else {
                return {
                    ...state,
                    cities: [...state.cities, action.payload]
                }
            }
       

        default:
            return state;
    }
}

export default currentLocation;