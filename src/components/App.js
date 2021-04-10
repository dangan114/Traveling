import { Switch, Route, Redirect } from 'react-router-dom'
import HotelSetup from './HotelSetup';
import HotelRanking from './HotelRanking'

import Hotel from './Hotel'
import AllDisplay from './AllDisplay';
import CitySetup from './CitySetup';
import City from './City';
import CountrySetup from './CountrySetup';
import Country from './Country';
import HotelSearch from './HotelSearch';

function App() {
  return (
    <main style={{margin: '5vh 2vw'}}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/setup/country"/>
        </Route> 

        <Route path="/setup/country" component={CountrySetup} />
        <Route path="/setup/city" component={CitySetup} />
        <Route path="/setup/hotel" exact component={HotelSetup} />

        <Route path="/setup/hotel/search" component={HotelSearch} />
        <Route path="/setup/hotel/ranking" component={HotelRanking} />

        <Route path="/data" exact component={AllDisplay} />
        <Route path="/data/:country" exact component={Country} />
        <Route path="/data/:country/:city" exact component={City} />
        <Route path="/data/:country/:city/:hotel" exact component={Hotel} />
      </Switch>
    </main>
  );  
}

export default App;
