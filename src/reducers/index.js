import { combineReducers } from 'redux';

const nowPlayingReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LIST': return action.payload;
        default: return state;
    }
}
const upcomingReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LIST': return action.payload;
        default: return state;
    }
}
const selectMovieReducer = (movie = '', action) => {
    switch (action.type) {
        case 'SELECT_MOVIE': return action.payload;
        default: return movie;
    }
}



const singleMovieReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SINGLE': return action.payload;
        default: return state;
    }
}


const selectDateReducer = (date = '', action) => {
    switch (action.type) {
        case 'SELECT_DATE': return action.payload;
        default: return date;
    }
}

const hourReducer = (hour = '', action) => {
    switch (action.type) {
        case 'SELECT_HOUR': return action.payload;
        default: return hour;
    }
}


const ticketsReducer = (tickets = {}, action) => {
    switch (action.type) {
        case 'SELECT_TICKET': return action.payload;
        default: return tickets;
    }
}

const selectSeatsReducer = (selectedSeats = [], action) => {
    switch (action.type) {
        case 'SELECT_SEATS': return action.payload;
        default: return selectedSeats;
    }
}

const bookingReducer = (booking = {}, action) => {
    switch (action.type) {
        case 'BOOKING_CONFIRM': return action.payload;
        default: return booking;
    }
}

const findBookingsReducer = (findExistBookings = [], action) => {
    switch (action.type) {
        case 'FIND_BOOKINGS': return action.payload;
        default: return findExistBookings;
    }
}

const userReducer = (user = {}, action) => {
    switch (action.type) {
        case 'USER_INFO': return action.payload;
        default: return user;
    }
}


export default combineReducers({
    nowPlay: nowPlayingReducer,
    upcomingPlay: upcomingReducer,
    singleMovie: singleMovieReducer,
    movie: selectMovieReducer,
    date: selectDateReducer,
    hour: hourReducer,
    tickets: ticketsReducer,
    selectedSeats: selectSeatsReducer,
    booking: bookingReducer,
    findExistBookings: findBookingsReducer,
    user: userReducer,


});