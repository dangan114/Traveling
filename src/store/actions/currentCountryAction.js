import { SET_COUNTRY, SET_COUNTRY_NAME, SET_COUNTRY_CODE, ADD_COUNTRY_CITY, RESET_COUNTRY } from "../constants/actionTypes"

const setCountry = (payload) => {
    return {
        type: SET_COUNTRY,
        payload: payload
    }
}

const resetCountry = () => {
    return {
        type: RESET_COUNTRY
    }
}

const setCountryName = (payload) => {
    return {
        type: SET_COUNTRY_NAME,
        payload: payload
    }
}

const setCountryCode = (payload) => {
    return {
        type: SET_COUNTRY_CODE,
        payload: payload
    }
}

const addCountryCity = (payload) => {
    return {
        type: ADD_COUNTRY_CITY,
        payload: payload
    }
}


export default {
    resetCountry, setCountry, setCountryName, setCountryCode, addCountryCity
}