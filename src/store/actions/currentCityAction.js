import { ADD_CITY_HOTEL, RESET_CITY, SET_CITY, SET_CITY_HOTELS, SET_CITY_NAME, SORT_CITY_HOTELS } from "../constants/actionTypes"

const setCity = (payload) => {
    return {
        type: SET_CITY,
        payload: payload
    }
}

const resetCity = () => {
    return {
        type: RESET_CITY
    }
}

const setCityName = (payload) => {
    return {
        type: SET_CITY_NAME,
        payload: payload
    }
}

const setCityHotels = (payload) => {
    return {
        type: SET_CITY_HOTELS,
        payload: payload
    }
}

const addCityHotel = (payload) => {
    return {
        type: ADD_CITY_HOTEL,
        payload: payload
    }
}

const sortCityHotels = () => {
    return {
        type: SORT_CITY_HOTELS,
    }
}

export default {
    resetCity, setCity, setCityName, setCityHotels, addCityHotel, sortCityHotels
}   