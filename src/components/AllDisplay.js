import { Box, Avatar, Card, CardHeader, CardMedia, Divider, Grid, IconButton, Typography, useTheme } from "@material-ui/core";
import { MoreVert, PlusOne } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { useHistory } from "react-router";
import { dbAddLocation, dbGetAllLocations } from "../data/dexie";
import Helpers from "../helpers/Helpers";
import allActions from "../store/actions";
import NavBar from "./NavBar";
import NoDisplayDialog from "./NoDisplayDialog";

function AllDisplay() {

    const [locations, setLocations] = useState([])

    const store = useStore()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {   
        dbGetAllLocations().then(data => {
            setLocations(data)
        })
    }, [])

    function handleIconClick(hotel, city, country) {
        dispatch(allActions.currentHotelAction.setHotel(hotel))
        dispatch(allActions.currentCityAction.setCity(city))
        dispatch(allActions.currentCountryAction.setCountry(country))
        history.push('/data/' + country.name + '/' + city.name + '/' + hotel.name)
    }

    function locationsDisplay(locations) {
        return locations.map(location => {
            return (
                <div>
                <Grid container style={{margin: '5vh 0'}} spacing={3}>
                    <Grid item xs={12}>
                        <Typography style={{fontWeight: 'bold', fontFamily: '"DejaVu Sans Mono", monospace'}} variant="h2" component="legend">{location.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {citiesDisplay(location)}
                    </Grid>
                    
                </Grid>
                <Divider style={{height: '5px'}} />
                </div>
            )
        })  
    }

    function citiesDisplay(country) {
        return country.cities.map(city => {
            return (
                <Grid style={{marginBottom: '8vh'}} container spacing={3}>
                    <Grid key={city.name} item xs={12}>
                        <Typography style={{textAlign: 'center', fontWeight: 'bold', fontFamily: '"DejaVu Sans Mono", monospace'}} variant="h4" component="legend">{city.name}</Typography>
                    </Grid>
              
                    {hotelsDisplay(city, country)}
                 
                </Grid>
            )
        })
    }

    function hotelsDisplay(city, country) {
        return city.hotels.map(hotel => { 
            return (
                <Grid key={hotel.name} item lg={3} md={4} sm={12}>
                    {hotelCard(hotel, city, country)}
                </Grid>     
            )
        })   
    }

    function hotelCard(hotel, city, country) {
       return (
           <Card onClick={() => handleIconClick(hotel, city, country)} style={{width: '40vh'}} raised>
               <CardHeader
                avatar={<Avatar>{hotel.rating}</Avatar>}
                title={hotel.name}
                subheader={Helpers.rankingDisplay(hotel.ranking)}
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
                >
               </CardHeader>  

               <CardMedia
                    component="img"
                    height="300" 
                    src ={hotel.thumbnail}
                    title={hotel.name}
                />     
           </Card>
       ) 
    }

    function noDiplayCheck() {
        if (locations.length !== 0) {
            return (
                <div style={{textAlign: 'center'}}>
                    {locationsDisplay(locations)}
                </div>
            )
        } else {
            return <NoDisplayDialog />
        }
    }

    return (
        <div>
            <NavBar />

            {noDiplayCheck()}
        </div>
    )
}

export default AllDisplay