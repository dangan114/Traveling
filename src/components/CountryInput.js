import { Button, FormControl, InputLabel, Input, FormHelperText, InputBase, TextField, Grid } from '@material-ui/core'
import { useState, useEffect } from 'react' 
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import countries from '../data/country_codes'

import allActions from '../store/actions/index'
import { dbAddLocation, dbGetAllLocations } from '../data/dexie'
import { Alert } from '@material-ui/lab'
import Helpers from '../helpers/Helpers'

function CountryInput() {

    // Redux Stuff
    const dispatch = useDispatch();

    // React Hooks
    const [country, setCountry] = useState('');
    const [locations, setLocations] = useState([])

    const [alert, setAlert] = useState('hidden')

    // React Router DOM
    let history = useHistory(); 

    useEffect(() => {
            
        dbGetAllLocations().then(data => {
            setLocations(data)
        })
    }, [])


    async function handleSubmit(event) {
        event.preventDefault()

        var countryName = countries.filter(e => Helpers.compareStrings(e.Name, country))

        if (countryName.length === 0) {
            setAlert('visible')
            return 
        }

        var name = countryName[0].Name
        var code = countryName[0].Code;

        const location = locations.find(location => location.code === code)
        
        if (location === undefined) {
            dispatch(allActions.currentCountryAction.setCountryName(name))
            dispatch(allActions.currentCountryAction.setCountryCode(code))
            history.push('/setup/city')
        } else {
            dispatch(allActions.currentCountryAction.setCountry(location))
            history.push('/data/' + location.name)
        }
        
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            
            <FormControl>
                <InputLabel htmlFor="location-input">Country</InputLabel>
                <Input type="text" id="location-input" aria-describedby="my-helper-text" onChange={e => setCountry(e.target.value)} />
                <FormHelperText id="my-helper-text">Share with us your desired country</FormHelperText>
                <Alert style={{visibility: alert}}  severity="error">Country Not Found. Please try again!</Alert>
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

export default CountryInput;