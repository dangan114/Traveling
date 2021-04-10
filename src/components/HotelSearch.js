import { useState, useEffect } from "react"
import { useDispatch, useSelector, useStore } from "react-redux"
import axios from 'axios'

import NavBar from './NavBar'
import RankingSetup from "./RankingSetup"
import allActions from "../store/actions"
import { GOOGLE_API_KEY, GOOGLE_CUSTOMSEARCH_ENGINE_ID } from "../store/constants/actionTypes"
import { Button, Divider, Typography } from "@material-ui/core"
import { useHistory } from "react-router"
import ImageDisplay from "./ImageDisplay"

function HotelSearch() {

    var [hotels, setHotels] = useState([])

    var store = useStore(); 
    var history = useHistory()

    const dispatch = useDispatch()

    async function fetchHotels(query) {

        var sydney = new window.google.maps.LatLng(-33.867, 151.195);

        var infowindow = new window.google.maps.InfoWindow();

        var map = new window.google.maps.Map(
            document.getElementById('map'), {center: sydney, zoom: 15});

        var request = {
            query: query,
            fields: ['formatted_address', 'name', 'geometry', 'rating', 'photos'],
        };

        var service = new window.google.maps.places.PlacesService(map);

        service.findPlaceFromQuery(request, async function(results, status) {
            console.log(results)

            if (results === null) {

            }
    
            if (results.length === 1) {
                const query = results[0].name + ' Hotel ' + store.getState().currentCity.name + ' ' + store.getState().currentCountry.name
                const images = await fetchImages(query)

                const hotel = {
                    name: results[0].name,
                    thumbnail: results[0].photos ? results[0].photos[0].getUrl() : '',
                    images: images,
                    address: results[0].formatted_address,
                    rating: results[0].rating
                }
                dispatch(allActions.currentHotelAction.setHotel(hotel))
                history.push('/setup/hotel/ranking')
            } 

            results.forEach(async (hotel) => {
                
                const query = hotel.name + ' Hotel and Resorts ' + store.getState().currentCity.name + ' ' + store.getState().currentCountry.name
                const images = await fetchImages(query)
                
                var result = {
                    name: hotel.name,
                    thumbnail: hotel.photos ? hotel.photos[0].getUrl() : '',
                    images: images,
                    address: hotel.formatted_address,
                    rating: hotel.rating
                }
                setHotels(state => [...state, result])
            })
           
        });
    }

    async function fetchImages(query) {
        const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
            params: {
                key: GOOGLE_API_KEY,
                enum: "photo",
                cx: GOOGLE_CUSTOMSEARCH_ENGINE_ID,
                searchType: "image",
                q: query
            }
        })

        const data = response.data.items.map(search => search.link) 
        return data
    }

    useEffect(async () => {
        const query = store.getState().currentHotel.name + ' Hotel and Resorts ' + store.getState().currentCity.name + ' ' + store.getState().currentCountry.name
        await fetchHotels(query)

    }, [])

    function handleHotelPick(hotel) {
        dispatch(allActions.currentHotelAction.setHotel(hotel))
        history.push('/setup/hotel/ranking')
    }

    return (
        <div>
            <NavBar />

            <div>
                {hotels.map(hotel => (
                    <div style={{textAlign: 'center'}}>
                    <Typography style={{marginTop: '5vh'}} variant="h2" component="legend">
                        <Button onClick={() => handleHotelPick(hotel)} style={{fontSize: "50%"}} color="default">{hotel.name}</Button>
                    </Typography> 
                    <ImageDisplay images={hotel.images} />

                    <Divider style={{height: '5px'}} variant="middle" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HotelSearch; 