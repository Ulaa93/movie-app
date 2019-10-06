import apiKey from '../apis/apiKey.js'
import localhost from '../apis/localServer.js';

export const fetchNowPlaying = () => async dispatch => {
    const response = await apiKey.get('/movie/now_playing', {
        params: {
            api_key: '5236ddbc013048df15c4d8048f0dd82e',
            language: 'en'
        }
    });
    dispatch({ type: 'FETCH_LIST', payload: response.data.results })
}

export const fetchUpcoming = () => async dispatch => {
    const response = await apiKey.get('/movie/upcoming', {
        params: {
            api_key: '5236ddbc013048df15c4d8048f0dd82e',
            language: 'en'
        }
    });
    dispatch({ type: 'FETCH_LIST', payload: response.data.results })
}

export const selectMovie = (movie) =>async dispatch=>{dispatch({ type: 'SELECT_MOVIE', payload: movie })
}


export const fetchSingleMovie = (movie) => async dispatch => {
    const response = await apiKey.get(`/movie/{movie_id}`, {
        params: {
            api_key: '5236ddbc013048df15c4d8048f0dd82e',
            language: 'en'
        }
    });
    dispatch({ type: 'FETCH_SINGLE', payload: movie })
}




export const selectDate = (date) => async dispatch=>{dispatch({ type: 'SELECT_DATE', payload: date })
}

export const selectHour = (hour) => async dispatch=>{dispatch({ type: 'SELECT_HOUR', payload: hour })
}


export const selectTicket = (tickets) => async dispatch=>{dispatch({ type: 'SELECT_TICKET', payload: tickets })
}

export const selectSeats = (seats) => async dispatch=>{dispatch({ type: 'SELECT_SEATS', payload: seats })
}


export const userInfo = (user) => async dispatch => {
    dispatch({ type: 'USER_INFO', payload: user })
}



export const confirmBooking = (booking) => async dispatch => {
    await localhost.post('/bookings', {
       
        movie_id: booking.movie.id,
        title: booking.movie.title,
         
        date: booking.date,
        hour: booking.hour,
        ticket: booking.tickets.quantity,
        seats: booking.selectedSeats,
         
            name: booking.user.name,
             last_name: booking.user.lastName,
             email: booking.user.email,
         
         
    });
    dispatch({ type: 'BOOKING_CONFIRM', payload: booking });
}


export const findBookings = (movie_id, date, hour) => async dispatch => {
    const response = await localhost.get('/bookings', {
        params: {
            id: movie_id,
            date:date,
            hour:hour
        }
    });
    dispatch({ type: 'FIND_BOOKINGS', payload: response.data });
}

