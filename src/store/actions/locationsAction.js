import { ADD_LOCATION, INITIALIZE_LOCATIONS } from "../constants/actionTypes"

const addLocation = (payload) => {
    return {
        type: ADD_LOCATION,
        payload: payload
    }
}

const initializeLocations = (payload) => {
    return {
        type: INITIALIZE_LOCATIONS,
        payload: payload
    }
}

export default {
    addLocation, initializeLocations
}
