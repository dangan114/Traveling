import { Divider, Typography, GridList, GridListTile, makeStyles, Button } from "@material-ui/core";
import { Star, StarBorder } from '@material-ui/icons'
import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useHistory } from "react-router";
import Helpers from "../helpers/Helpers";
import allActions from "../store/actions";
import NavBar from "./NavBar";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginBottom: '10vh'
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

function City(props) {
    const classes = useStyles()
    
    var store = useStore()
    var dispatch = useDispatch()
    var history = useHistory()


    function handleChangeLocation() {
        dispatch(allActions.currentCityAction.resetCity())
        dispatch(allActions.currentHotelAction.resetHotel())
        history.push('/setup/city')
    }

    function handleAddHotel() {
        dispatch(allActions.currentHotelAction.resetHotel())
        history.push('/setup/hotel')
    }

    const hotelsDisplay = store.getState().currentCity.hotels.map(hotel => 
        <div>
            <Divider variant='middle' />
            <Typography 
                style={{marginTop: '5vh', textAlign: 'center'}} 
                variant="h2" 
                component="legend"
            >
                {hotel.name}
            </Typography>
            <div style={{marginBottom: '4vh', textAlign: 'center'}}>
                {Helpers.rankingDisplay(hotel.ranking)}
            </div>
                    <GridList className={classes.gridList} cols={2.5}>
                        {hotel.images.map((image) => (
                        <GridListTile key={image} style={{ height: '50vh' }}>
                            <img src={image} />
                        </GridListTile>
                        ))}
                    </GridList>
                    
        </div>
    )

    return (
        <div>
            <NavBar />
            <div>
                <Typography style={{marginTop: '5vh', textAlign: 'center'}} variant="h2" component="legend">{props.match.params.city}</Typography>
                <Typography style={{marginBottom: '5vh', textAlign: 'center'}} variant="h4" component="legend">{props.match.params.country}</Typography>
                <Divider variant='middle' />
                <div style={{margin: '5vh 0', textAlign: 'center'}}>
                    <Button onClick={handleChangeLocation} style={{margin: '0 2vw'}} variant="contained" color="primary">Change City</Button>
                    <Button onClick={handleAddHotel} style={{margin: '0 2vw'}} variant="contained" color="secondary">Add Hotel</Button>
                </div>
                <div>
                    {hotelsDisplay}
                </div>

            </div>
        </div>
    )
}   

export default City;