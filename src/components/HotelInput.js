import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core'
import { useState, useEffect } from 'react' 
import { useHistory } from 'react-router-dom'
import { useDispatch, useStore } from 'react-redux'
import allActions from '../store/actions'
import Helpers from '../helpers/Helpers'

function HotelInput() {
  
     // Redux Stuff
    var store = useStore()
    const dispatch = useDispatch();

    const [hotel, setHotel] = useState('')

    const history = useHistory()

    useEffect(() => {
        if (store.getState().currentHotel.name !== "") {
            dispatch(allActions.currentHotelAction.resetHotel())
        }
    })

    function handleSubmit(event) {
        event.preventDefault()

        dispatch(allActions.currentHotelAction.setHotelName(hotel))

        const result = store.getState().currentCity.hotels.find(data => Helpers.compareStrings(data.name, hotel))
        
        if (result === undefined) {
            history.push('/setup/hotel/search')
        } else {
            dispatch(allActions.currentHotelAction.setHotel(result))
            history.push('/data/hotel/' + store.getState().currentLocation.city + '/' + store.getState().currentHotel.name);
        }
    }
    
    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <FormControl>
                <InputLabel htmlFor="location-input">Hotel</InputLabel>
                <Input type="text" id="location-input" aria-describedby="my-helper-text" onChange={e => setHotel(e.target.value)} />
                <FormHelperText id="my-helper-text">Share with us your recently visited hotel</FormHelperText>
                <Button type="submit" color="primary">Submit</Button>
            </FormControl>
        </form>
    )
}

export default HotelInput