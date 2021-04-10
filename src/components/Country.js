import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Avatar, Box, Button, Card, CardHeader, CardMedia, Divider, Grid, IconButton, Typography } from "@material-ui/core"
import { ExpandMore, More, MoreVert, PlayCircleFilled, PlaylistAddCheck } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { useDispatch, useStore } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { dbGetAllLocations } from "../data/dexie"
import Helpers from "../helpers/Helpers"
import allActions from "../store/actions"
import NavBar from "./NavBar"

function Country(props) {
    
    const store = useStore()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        
    }, [])


    function handleHotelNavigation(hotel, city) {
        dispatch(allActions.currentHotelAction.setHotel(hotel))
        dispatch(allActions.currentCityAction.setCity(city))
        history.push('/data/' + store.getState().currentCountry.name + '/' + city.name + '/' + hotel.name)
    }

    const citiesDisplay = store.getState().currentCountry.cities.map(city => {
        return (
            <div style={{marginBottom: '10vh'}}>
            <Typography style={{fontFamily: '"Century Gothic", SANS-SERIF', fontWeight: 'bold', textAlign: 'center', margin: '5vh 0'}} variant="h1">{city.name}</Typography>
            <div style={{margin: '5vh 0', textAlign: 'center'}}>
                <Button onClick={() => handleAddHotel(city)} style={{margin: '0 2vw'}} variant="contained" color='default'>Add Hotel</Button>
            </div>    
                <div style={{width: '100%'}}>
                    <Grid container spacing={3}>
                        {hotelsDisplay(city)}
                    </Grid>
                </div>
            </div>
        )
    })

    function hotelsDisplay(city) {
        return city.hotels.map(hotel => { 
            return (
                <Grid item xs={3}>
                    {hotelCard(hotel, city)}
                </Grid>
            )
        })   
    }

    function handleAddHotel(city) {
        dispatch(allActions.currentCityAction.setCity(city))
        history.push('/setup/hotel')
    }

    function handleChangeCountry() {
        dispatch(allActions.currentCountryAction.resetCountry())
        history.push('/setup/country')
    }

    function handleAddCity() {
        history.push('/setup/city')
    }

    function hotelCard(hotel, city) {
       return (
           <Card style={{height: "100%"}} raised>
               <CardHeader
                avatar={<Avatar>{hotel.rating}</Avatar>}
                title={hotel.name}
                subheader={Helpers.rankingDisplay(hotel.ranking)}
                action={
                    <IconButton onClick={() => handleHotelNavigation(hotel, city)}>
                        <MoreVert />
                    </IconButton>
                }
                >
               </CardHeader>  

               <CardMedia
                    component="img"
                    height='300' 
                    src ={hotel.thumbnail}
                    title={hotel.name}
                />     
           </Card>
       ) 
    }

    return (
        <div>
            <NavBar />

            <div>
                <Typography style={{margin: '5vh 0', textAlign: 'center'}} variant="h2" component="legend">{props.match.params.country}</Typography>
                <Divider variant='middle' />
                <div style={{margin: '5vh 0', textAlign: 'center'}}>
                    <Button onClick={handleChangeCountry} style={{margin: '0 2vw'}} variant="contained" color="primary">Change Country</Button>
                    <Button onClick={handleAddCity} style={{margin: '0 2vw'}} variant="contained" color="secondary">Add City</Button>
                </div>
                <Divider variant='middle' />
                <div>
                    {citiesDisplay}
                </div>

            </div>
        </div>
    )
}

export default Country