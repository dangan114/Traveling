import { Button, FormControl, InputLabel, Input, FormHelperText, InputBase, TextField, Grid } from '@material-ui/core'
import { useState, useEffect } from 'react' 
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch, useStore } from 'react-redux'

import cities from 'cities.json'

import allActions from '../store/actions/index'
import { dbAddLocation, dbGetAllLocations } from '../data/dexie'
import axios from 'axios'
import { Alert } from '@material-ui/lab'
import Helpers from '../helpers/Helpers'

function CityInput(props) {

    const store = useStore()

    // Redux Stuff
    const dispatch = useDispatch();

    // React Hooks
    const [cityName, setCityName] = useState('');

    const [alert, setAlert] = useState('hidden')

    // React Router DOM
    let history = useHistory(); 

    useEffect(() => {
    
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()

        // filter cities in a specific country
        var citiesFilter = cities.filter(e => e.country === store.getState().currentCountry.code)


        console.log(citiesFilter)
        // find the city within the filtered cities
        var cityExists = await citiesFilter.find(e => Helpers.normalizeString(e.name).replace(/\s+/g, '') === cityName.toLowerCase().replace(/\s+/g, ''))
    
        if (cityExists === undefined) {
            setAlert('visible')
            return 
        }

        var city = store.getState().currentCountry.cities.find(city => city.name === cityName)

        if (city === undefined) {
            // New Location
            dispatch(allActions.currentCityAction.setCityName(cityName))
            history.push('/setup/hotel')
        } else {
            // Existing Location
            dispatch(allActions.currentCityAction.setCity(city))
            history.push('/data/' + store.getState().currentCountry.name + '/' + city.name) 
        }
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            
            <FormControl>
                <InputLabel htmlFor="location-input">City</InputLabel>
                <Input type="text" id="location-input" aria-describedby="my-helper-text" onChange={e => setCityName(e.target.value)} />
                <FormHelperText id="my-helper-text">Share with us your desired city</FormHelperText>
                <Alert style={{visibility: alert}}  severity="error">Location Not Found. Please try again!</Alert>
                <Button type="submit" color="primary">Submit</Button>
            </FormControl>

        </form>
    )
}

// const mapStateToProps = state => {
//     return { places: state.locations };
// }

// const mapDispatchToProps = dispatch => {
//     initializeLocations: locations => dispatch(initializeLocations(locations))
// }

export default CityInput;