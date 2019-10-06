import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Header from './Header';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';
import Confirmation from './Confirmation';
import ReservationDate from './ReservationDate';

import ReservationHour from './ReservationHour';
import SelectSeats from './SelectSeats';
import SelectTicket from './SelectTicket';

import PersonalInfo from './PersonalInfo';

import SingleMovie from './SingleMovie';
import SingleMovieUpcoming from './SingleMovieUpcoming'


const App = () => {
    return (
        <div className="ui container">

            <HashRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={NowPlaying} />
                    <Route path="/now_playing" exact component={NowPlaying} />
                    <Route path="/upcoming" exact component={Upcoming} />
                <Route path="/singlemovie/:id" exact component={SingleMovie} />
                <Route path="/singlemovieupcoming/:id" exact component={SingleMovieUpcoming} />

                <Route path="/reservationdate/:id" exact component={ReservationDate} />

                <Route path="/reservationhour/:id" exact component={ReservationHour} />
                <Route path="/selectticket/:id" exact component={SelectTicket} />
                <Route path="/selectseats/:id" exact component={SelectSeats} />
                <Route path="/personalinfo/:id" exact component={PersonalInfo} />
                <Route path="/confirmation/:id" exact component={Confirmation} />
                </Switch>
            </HashRouter>
        </div>
    )

}
export default App;