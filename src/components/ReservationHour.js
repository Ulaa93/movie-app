import React, { Component } from 'react';
import Modal from './Modal';
import {  NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NowPlaying from './NowPlaying'
import { selectMovie,  selectDate, selectHour } from '../actions';


class ReservationHour extends Component {
    constructor(props){
        super(props);
        console.log(this.props, selectDate);
        this.props.selectHour(this.props.movie, this.props.date);
        this.state={
            movie:this.props.movie,
             date:this.props.date,
             hour: '',
             tickets:{},
             selectedSeats:[],
             placeChecked: [],
             user:{},
      booking:{}
         }
    }
    
   
                componentDidUpdate() {
                    console.log(this.state.hour)

                    this.props.selectHour(this.state.hour);
                    console.log(this.state)
                }
   
    submitHandler = (event) => {
      event.preventDefault();
          console.log(this.props.match.params);
      window.location.href=`/#/selectticket/${this.props.movie.id}`;
        }
    



    handleInput(e) {
        // e.preventDefault();
        this.setState({
            hour: e.target.value
        })
        console.log(this.state)
        console.log(e.target.value);
    }



    render() {
        const form = (
            
              <form className="ui center aligned container reservationHour " >
              
                    <div><i className="clock outline icon huge" style={{marginBottom:"20px"}}></i></div>
                    <div className="ui segment"  onClick={this.handleInput.bind(this)}  required>
                    <input type="button" className="hourOfSeans day1 ui button yellow massive" value="13:00" style={{margin:"8px"}} />
                    <input type="button" className="hourOfSeans day2 ui button yellow massive" value="15:30" style={{margin:"8px"}} />
                    <input type="button" className="hourOfSeans day3 ui button yellow massive" value="18:00" style={{margin:"8px"}} />
                </div>
                <div>
                <NavLink to="/">
                        <button type="button" className="ui button negative big" >Exit</button>
                    </NavLink >
                    <NavLink  to={`/reservationdate/${this.props.movie.id}`}>
                        <button type="button" className="ui button  black big" >Back</button>
                    </NavLink >
                        <button type="submit" className="ui button big primary" onClick={this.submitHandler.bind(this)}>Next</button>
                </div>
            </form>
                    )


        return (
            <div>
                <NowPlaying />
          
            <Modal
                title="Select hour of seans"
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
        hour: state.hour
       };
}

export default connect(mapStateToProps, {selectMovie, selectDate, selectHour})(ReservationHour);
