import { Button, Typography, GridList, GridListTile, makeStyles, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Helpers from "../helpers/Helpers";
import HotelDisplay from "./HotelDisplay";
import NavBar from "./NavBar";

function Hotel(props) {

    var currentHotel = useSelector(state => state.currentHotel)

    const pros = [
      'Free Parking',
      'Reasonable Price',
      'Ocean View',
      'Customer Service',
      'Offer Breakfast',
      'Kitchen Essentials'
    ]

    const cons = [
      'Test',
      'Hello Test',
      'Test Test Test',
      'Test Test',
      'Test Test',
      'Test Test',
      'Test Test Test',
      'Test Test Test Test'
    ]

    let [width, setWidth] = useState(0)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        handleResize();

    }, [width])

    function imageSpacing() {
        var width = window.innerWidth; 
        if (width >= 400) {
            return 2.5;
        } else {
            return 1; 
        }
    }

    const prosList = pros.map((pro, index) => {
      return <li key={index}>{pro}</li>
    })

    const consList = cons.map((con, index) => {
      return <li key={index}>{con}</li>
    })

    return (
        <div>
            <NavBar />
            
            <div>
              
                <HotelDisplay country={props.match.params.country} city={props.match.params.city} hotel={currentHotel} />

                  <Grid style={{margin: '5vh 0'}} justify="center" container spacing={3}>
                    {/* <Grid item xs={6} align="center">
                          <Typography variant="h4">Pros</Typography>
                          <ul>
                            {prosList}
                          </ul>
                    </Grid>
                    <Grid item xs={6} align="center">
                          <Typography variant="h4">Cons</Typography>
                          <ul>
                            {consList}
                          </ul>
                    </Grid>*/}
                  </Grid> 
            </div>
        </div>
    )
}   

export default Hotel;