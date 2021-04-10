import { useState } from 'react';
import Delayed from './Delayed'
import { Button, Box, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { useDispatch, useStore } from 'react-redux';
import allActions from '../store/actions';
import { useHistory } from 'react-router';
import { dbAddLocation } from '../data/dexie';

function RankingSetup() {

    const [ranking, setRanking] = useState(5);
    const [visibility, setVisibility] = useState('hidden')

    var store = useStore()

    var history = useHistory()
    const dispatch = useDispatch()

    function handleRankingSubmit() {
        dispatch(allActions.currentHotelAction.setHotelRanking(ranking))
        dispatch(allActions.currentCityAction.addCityHotel(store.getState().currentHotel))
        dispatch(allActions.currentCountryAction.addCountryCity(store.getState().currentCity))
        dbAddLocation(store.getState().currentCountry)
        history.push('/data/' + store.getState().currentCountry.name + '/' + store.getState().currentCity.name);
    }

    return (
        <Delayed waitBeforeShow={5000}>
            <Box style={{textAlign: 'center', margin: '5vh 0'}} component="fieldset" mb={3} borderColor="transparent">
                <Typography style={{margin: '2vh 0'}} variant="h2" component="legend">How much would you rank this hotel?</Typography>
                <Rating 
                    size="large"
                    name="hotel-rating" 
                    value={ranking}
                    max={10}
                    onChange={(event, newValue) => {
                        setRanking(newValue);
                        setVisibility('visible')
                    }}    
                />
                <Button onClick={handleRankingSubmit} size="large" color="primary" disableElevation="true" style={{ marginLeft: '2vw', visibility: visibility, fontSize: '20px' }}>Save as rank {ranking}?</Button>
            </Box>
        </Delayed>
    )
}

export default RankingSetup; 