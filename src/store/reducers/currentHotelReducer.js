import { SET_HOTEL, SET_HOTEL_IMAGES, SET_HOTEL_NAME, SET_HOTEL_ADDRESS, SET_HOTEL_RANKING, SET_HOTEL_RATING, RESET_HOTEL } from "../constants/actionTypes";

const initialState = {
    name: '',
    images: [],
    ranking: 0,
    rating: 0,
    address: ''
}

const currentHotel = (state = initialState, action) => {
    switch (action.type) {
        case RESET_HOTEL:
            return initialState;
        case SET_HOTEL:
            return Object.assign({}, state, action.payload)
        case SET_HOTEL_NAME: 
            return {...state, name: action.payload}
        case SET_HOTEL_ADDRESS:
            return {...state, address: action.payload}
        case SET_HOTEL_IMAGES:
            return {...state, images: action.payload}
        case SET_HOTEL_RANKING:
            return {...state, ranking: action.payload}
        case SET_HOTEL_RATING:
            return {...state, rating: action.payload}
        default:
            return state
    }
}

export default currentHotel; 