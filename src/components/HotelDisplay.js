import { Box, Button, Divider, Grid, GridList, GridListTile, makeStyles, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Helpers from "../helpers/Helpers";
import allActions from "../store/actions";
import ImageDisplay from "./ImageDisplay";

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

function HotelDisplay(props) {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    function handleChangeCity() {
      dispatch(allActions.currentCityAction.resetCity());
      dispatch(allActions.currentHotelAction.resetHotel()); 
      history.push('/setup/city')
    }

    function handleAddHotel() {
      dispatch(allActions.currentHotelAction.resetHotel())
      history.push('/setup/hotel')
    }
    return (
        <div>
            <Typography 
                style={{marginTop: '5vh', textAlign: 'center', fontWeight: 'bold', fontFamily: '"DejaVu Sans Mono", monospace'}} 
                variant="h2" 
                component="legend"
                >
                {props.hotel.name}
                {/* <Button style={{margin: '0 2vw', fontSize: '80%'}} variant="contained" color="danger">{currentHotel.ranking}</Button> */}
                </Typography>

                <Typography 
                style={{textAlign: 'center', fontFamily: '"Century Gothic", SANS-SERIF'}} 
                variant="h4" 
                component="legend"
                >
                {props.city}, {props.country}
                </Typography>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  style={{margin: '5vh 0'}}
                >                    
                  <div style={{fontSize: '200%'}}>
                    {Helpers.rankingDisplay(props.hotel.ranking)}
                  </div>
                </Box>

                <Divider style={{margin: '5vh 0'}} variant='middle' />
                <div style={{textAlign: 'center'}}>
                    <Button onClick={handleChangeCity} style={{margin: '0 2vw'}} variant="contained" color="primary">Change City</Button>
                    <Button onClick={handleAddHotel} style={{margin: '0 2vw'}} variant="contained" color="secondary">Change Hotel</Button>
                </div>
                <Divider style={{margin: '5vh 0'}} variant='middle'/>
                
                <ImageDisplay images={props.hotel.images} />
        </div>
        
    )
}

export default HotelDisplay