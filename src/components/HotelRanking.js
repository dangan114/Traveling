import { Button, Typography } from "@material-ui/core";
import { useDispatch, useStore } from "react-redux";
import { useHistory } from "react-router";
import allActions from "../store/actions";
import ImageDisplay from "./ImageDisplay";
import NavBar from "./NavBar";
import RankingSetup from "./RankingSetup";

function HotelRanking() {
    
    const store = useStore()
    const dispatch = useDispatch()
    const history = useHistory()

    function handleSelectOthersClick() {
        dispatch(allActions.currentHotelAction.resetHotel())
        history.push('/setup/hotel')
    }

    return(
        <div>
            <NavBar />

            <div style={{textAlign: 'center'}}>
                <Typography style={{margin: '5vh 0'}} variant="h2" component="legend">
                            {store.getState().currentHotel.name}
                </Typography>
                <div style={{marginBottom: '5vh', textAlign: 'center'}}>
                    <Button onClick={handleSelectOthersClick} variant="contained" color="primary">Select Other Hotels</Button> 
                </div>
                <ImageDisplay images={store.getState().currentHotel.images} />

                <RankingSetup />
            </div>
        </div>
    )
}

export default HotelRanking