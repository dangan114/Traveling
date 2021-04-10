import { SET_HOTEL, SET_HOTEL_NAME, SET_HOTEL_IMAGES, SET_HOTEL_RANKING, SET_HOTEL_ADDRESS, SET_HOTEL_RATING, RESET_HOTEL } from "../constants/actionTypes"

const setHotel = (payload) => {
    return {
        type: SET_HOTEL,
        payload: payload
    }
}

const resetHotel = () => {
    return {
        type: RESET_HOTEL
    }
}

const setHotelName = (payload) => {
    return {
        type: SET_HOTEL_NAME,
        payload: payload
    }
}

const setHotelImages = (payload) => {
    return {
        type: SET_HOTEL_IMAGES,
        payload: payload
    }
}

const setHotelRanking = (payload) => {
    return {
        type: SET_HOTEL_RANKING,
        payload: payload
    }
}

const setHotelAddress = (payload) => {
    return {
        type: SET_HOTEL_ADDRESS,
        payload: payload
    }
}

const setHotelRating = (payload) => {
    return {
        type: SET_HOTEL_RATING,
        payload: payload
    }
}

export default {
    resetHotel, setHotel, setHotelName, setHotelImages, setHotelRanking, setHotelAddress, setHotelRating
}