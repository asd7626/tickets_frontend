import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './components/main_page';
import EventDetail from './components/EventDetail';
import PopularEvents from './components/PopularEvents';
import LatestEvents from './components/LatestEvents';
import EventsByCategory from './components/EventsByCategory';
import EventsByCity from './components/EventsByCity';
import Cart from './components/Cart';

const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path ='/cart' component={Cart} />
            <Route exact path='/category/:category' component={EventsByCategory} />
            <Route exact path='/' component={MainPage} />
            
            <Route exact path='/new' component={LatestEvents}   />
            <Route exact path='/popular' component={PopularEvents} />
             
            <Route  path= '/:city([a-z]+)' component={EventsByCity} />
            <Route  path='/:eventID([0-9]+)' component={EventDetail} />       
        </Switch>   
    </div>
)

export default BaseRouter;