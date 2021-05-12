import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core'
import { useState, useEffect } from 'react' 
import { useHistory } from 'react-router-dom'
import { useDispatch, useStore } from 'react-redux'
import allActions from '../store/actions'
import Helpers from '../helpers/Helpers'

function HotelInput(props) {
  
     // Redux Stuff
    var store = useStore()
    const dispatch = useDispatch();

    const [hotel, setHotel] = useState('')

    const history = useHistory()

    useEffect(() => {

        console.log(props.error)

        if (store.getState().currentHotel.name !== "") {
            dispatch(allActions.currentHotelAction.resetHotel())
        }
    })

    function handleSubmit(event) {
        event.preventDefault()

        dispatch(allActions.currentHotelAction.setHotelName(hotel))
        history.push('/setup/hotel/search')
       
    }

    function helperTextDisplay() {
        if (props.error === '') {
            return (
                <FormHelperText id="my-helper-text">Share with us your recently visited hotel</FormHelperText>
            )
        } else {
            return (
                <FormHelperText error id="my-helper-text">{props.error}</FormHelperText>
            )
        }
    }
    
    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <FormControl>
                <InputLabel htmlFor="location-input">Hotel</InputLabel>
                <Input type="text" id="location-input" aria-describedby="my-helper-text" onChange={e => setHotel(e.target.value)} />
                {helperTextDisplay()}
                <Button type="submit" color="primary">Submit</Button>
            </FormControl>
        </form>
    )
}

export default HotelInput