import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import List from './List';
import PorkPage from './menu/PorkPage';
import Seafood from './menu/Seafood';
import Chicken from './menu/Chicken';
import Breakfast from './menu/Breakfast';
import Vegetarians from './menu/Vegetarians';
import Lunch from './menu/Lunch';
import KidsMenu from './menu/KidsMenu';
import CelebrateOnBoard from './menu/CelebrateOnBoard';
import BeefPage from './menu/Beefpage';

const Route1 = () => {
  return (
    <Router>
        <Switch>
            {/* Route for the default menu page */}
            <Route exact path="/" component={List} />
            {/* Routes for different menu categories */}
            <Route path="/pork" component={PorkPage} />
            <Route path="/seafood" component={Seafood} />
            <Route path="/chicken" component={Chicken} />
            <Route path="/beef" component={BeefPage} />
            <Route path="/vegetarians" component={Vegetarians} />
            <Route path="/breakfast" component={Breakfast} />
            <Route path="/lunch" component={Lunch} />
            <Route path="/celebrate-on-board" component={CelebrateOnBoard} />
            <Route path="/kids-menu" component={KidsMenu} />
        </Switch>
    </Router>
  )
}

export default Route1;