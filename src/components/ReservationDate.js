import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import { NavLink, withRouter } from 'react-router-dom';
import { selectMovie, selectDate } from '../actions';
import NowPlaying from './NowPlaying'


let currentDate = new Date();
//Date1
let date1 = new Date(currentDate);
date1.setDate(currentDate.getDate() + 1);
let date1Text = `${date1.getDate() < 10 ? '0' + date1.getDate() : date1.getDate()}.${(date1.getMonth() + 1) < 10 ? '0' + (date1.getMonth() + 1) : (date1.getMonth() + 1)}`;
//Date2
let date2 = new Date(currentDate);
date2.setDate(currentDate.getDate() + 2);
let date2Text = `${date2.getDate() < 10 ? '0' + date2.getDate() : date2.getDate()}.${(date2.getMonth() + 1) < 10 ? '0' + (date2.getMonth() + 1) : (date2.getMonth() + 1)}`;
//Date3
let date3 = new Date(currentDate);
date3.setDate(currentDate.getDate() + 3);
let date3Text = `${date3.getDate() < 10 ? '0' + date3.getDate() : date3.getDate()}.${(date3.getMonth() + 1) < 10 ? '0' + (date3.getMonth() + 1) : (date3.getMonth() + 1)}`;
//Date4
let date4 = new Date(currentDate);
date4.setDate(currentDate.getDate() + 4);
let date4Text = `${date4.getDate() < 10 ? '0' + date4.getDate() : date4.getDate()}.${(date4.getMonth() + 1) < 10 ? '0' + (date4.getMonth() + 1) : (date4.getMonth() + 1)}`;


class ReservationDate extends Component {
  
constructor(props, movie){
    super(props);
    console.log(this.props);
    console.log(this.props.date)
    this.props.selectDate(this.props.movie.id);
    console.log(this.state)
this.state={
   movie:this.props.movie,
    date:'',
    hour: '',
    tickets:{},
    selectedSeats:[],
    placeChecked: [],
    user:{},
    booking:{}
    
}
    console.log(this.props.selectMovie)
}

componentDidMount(){
    console.log(this.state)
    console.log(this.props.selectMovie)

    console.log(this.props.match.params.id);
}
            componentDidUpdate(date) {
                console.log(this.state.date)
                this.props.selectDate(this.state.date);
                console.log(this.state)

            }
  

    handleInput(e, ) {
        console.log(selectMovie, this.props, this.state)
        this.setState({
            date: e.target.value

        })
        console.log(this.state)

    }

    submitHandler = (event,movie) => {
        console.log(this.state)
        const dateValue = this.state.date;
        event.preventDefault();
        
        console.log(this.state.date, this.state)
    console.log(this.state.booking, dateValue, this.props.match.params.id);
        window.location.href=`/#/reservationhour/${this.props.movie.id}`;
          }
   
    render() {
               const form = (
            <form className="ui center aligned container reservationDate "  >
                <div><i className="calendar alternate outline icon huge" style={{ marginBottom: "20px" }}></i></div>
                <div className="ui segment" value={"example"} onClick={this.handleInput.bind(this)} required>
                    <input type="button" className="dateOfSeans  day1 ui button orange massive" value={date1Text} style={{margin:"8px"}}/>
                    <input type="button" className="dateOfSeans day2 ui button orange massive" value={date2Text} style={{margin:"8px"}} />
                    <input type="button" className="dateOfSeans day3 ui button orange massive" value={date3Text} style={{margin:"8px"}} />
                    <input type="button" className="dateOfSeans day4 ui button orange massive" value={date4Text} style={{margin:"8px"}} />
                </div>
                <div>
                    <NavLink to="/">
                        <button type="button" className="ui button negative big" >Exit</button>
                    </NavLink >
                        <button type="submit" className="ui button big primary" onClick={this.submitHandler.bind(this)}>Next</button>
                </div>
            </form>
        )

        return (
            <div>
            <NowPlaying />
            <Modal
                title="Select date of seans"
                overview={form}
            />
</div>

        )
    }
};
const mapStateToProps = state => {
    console.log(state)
    return { 
        movie: state.movie,
        date: state.date,
      
       };
}

export default withRouter (connect(mapStateToProps, { selectMovie, selectDate})(ReservationDate));