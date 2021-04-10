import { ADD_CITY_HOTEL, RESET_CITY, SET_CITY, SET_CITY_NAME, SORT_CITY_HOTELS, UPDATE_CITY_HOTEL } from "../constants/actionTypes";

const initialState = {
    name: '',
    hotels: []
}

const currentCity = (state = initialState, action) => {
    switch (action.type) {
        case RESET_CITY:
            return initialState
        case SET_CITY:
            return Object.assign({}, state, action.payload)
        case SET_CITY_NAME:
            return {
                ...state,
                name: action.payload
            }

        case ADD_CITY_HOTEL:
            
            var hotels = [...state.hotels, action.payload]
            var orderedHotels = hotels.slice().sort(function(a, b) {
                if (a.ranking > b.ranking)
                    return -1
                if (a.ranking < b.ranking)
                    return 1
                return 0
            })

            return {
                ...state,
                hotels: orderedHotels
            }

        case UPDATE_CITY_HOTEL:
            const index = state.hotels.findIndex(hotel => hotel.name === action.payload.name)
            return {
                ...state,
                hotels: [
                    ...state.hotels.slice(0, index),
                    {
                        name: action.payload.name,
                        images: [...action.payload.images],
                        ranking: action.payload.ranking
                    },
                    ...state.hotels.slice(index + 1)
                ]
            }

        case SORT_CITY_HOTELS:
            return {
                ...state,
                hotels: state.hotels.slice().sort(function(a, b) {
                    if (a.ranking < b.ranking)
                        return -1
                    if (a.ranking > b.ranking)
                        return 1
                    return 0
            })
        }

        default:
            return state;
    }
}

export default currentCity;