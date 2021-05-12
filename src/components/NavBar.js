import { Grid, makeStyles, AppBar, Toolbar, IconButton, List, ListItem, ListItemText } from '@material-ui/core'

import { Home } from '@material-ui/icons'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import allActions from '../store/actions';

const useStyles = makeStyles({
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    }
});

const navLinks = [
    { title: `All`, path: `/data` },
    { title: `Search`, path: `/setup/country` },
    { title: `Feedback`, path: `/feedback` },
  ]

function NavBar() {
    const classes = useStyles();

    const dispatch = useDispatch()

    function handleNavigation(title, path) {
      if (title === "Search" && path === "/setup/country") {
        dispatch(allActions.currentCountryAction.resetCountry())
        dispatch(allActions.currentCityAction.resetCity())
        dispatch(allActions.currentHotelAction.resetHotel())
      }
    }

    return (
      <Grid container>
        <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="home">
                <Home fontSize="large" />
            </IconButton>

            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                {navLinks.map(({ title, path }) => (
                <Link onClick={() => handleNavigation(title, path)} to={path} key={title} className={classes.linkText}>
                    <ListItem button>
                    <ListItemText primary={title} />
                    </ListItem>
                </Link>
                ))}
            </List>
          </Toolbar>
        </AppBar>
        </Grid>
        </Grid>
    )
}

export default NavBar;
