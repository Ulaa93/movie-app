import React, { Component } from 'react';
import Modal from './Modal';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NumericInput from 'react-numeric-input';
import NowPlaying from './NowPlaying'
import { selectMovie,  selectDate, selectHour, selectTicket } from '../actions';


class SelectTicket extends Component {
    constructor(props){
        super(props);
        console.log(this.state)
        console.log(this.props);
        this.props.selectTicket(this.props.movie, this.props.date, this.props.hour);
        this.state = {
            movie:this.props.movie,
            date: this.props.date,
            hour: this.props.hour,
            selectedSeats:[],
            placeChecked: [],
            userInfo:{},
      booking:{},
            tickets:{},
            normal: this.props.tickets.normal || 0,
             student: this.props.tickets.student || 0,
            totalPrice: this.props.tickets.totalPrice || 0,
             quantity: this.props.tickets.quantity || 0
        };
    }
    
    componentDidMount(){
        console.log(this.props.match.params.id);
        console.log(this.props.match.normal)
      this.props.selectTicket(this.props.movie, this.props.date, this.props.hour);
    }
             
                    componentDidUpdate(tickets) {
                        console.log(this.state.tickets)
    
                        this.props.selectTicket(this.state.tickets);
                        console.log(this.state)
                    }
                   
    submitHandler = (event) => {
       event.preventDefault();
      let totalPrice = this.price(this.state);
      let totalQuantity = this.state.normal + this.state.student;
      console.log(`total quantity: ${totalQuantity}`, totalPrice); 
      this.setState({tickets:{totalPrice: totalPrice, quantity: totalQuantity, normal: this.state.normal, student:this.state.student}});
      this.props.selectTicket(this.state.tickets);
      console.log(event.target.value)
      console.log(this.props.match.params.id);
          window.location.href=`/#/selectseats/${this.props.movie.id}`
        }


        price(param){
            console.log(param)
            return (param.normal*30) + (param.student*20)     }  

    render() {
               const ticket = (
            <form className="ui center aligned container reservationForm " >
                <div className="ui segment massive ticket-number" style={{backgroundColor:"rgba(244, 201, 23, 0.6)"}}>
                    <label >Normal ticket 30 zł</label>

                    <NumericInput id="numeric-input"
                            min={0} 
                            max={20} 
                            value={this.state.normal}
                            onChange={e => this.setState({normal: e})} 
                            />
                </div>
                <div className="ui segment massive ticket-number" style={{backgroundColor:"rgba(244, 201, 23, 0.6)"}} >
                    <label >Student ticket 20 zł</label>
                    <NumericInput id="numeric-input"
                            min={0} 
                            max={20} 
                            value={this.state.student}
                            onChange={e =>  this.setState({student: e})} 
                            />
                </div>
                <div>
                <NavLink to="/">
                        <button type="button" className="ui button negative big" >Exit</button>
                    </NavLink >
                    <NavLink to={`/reservationhour/${this.props.movie.id}`}>
                        <button type="button" className="ui button black big" >Back</button>
                    </NavLink >
                        <button type="submit" className="ui button big primary" onClick={this.submitHandler.bind(this)}>Next</button>
                </div>
            </form>
        )

        return (
            <div>
                  <NowPlaying />
           
            <Modal
                title="Select tickets"
                overview={ticket}
              
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
        hour:state.hour,
        tickets: state.tickets,
        };
}

export default connect(mapStateToProps, {selectMovie, selectDate, selectHour, selectTicket})(SelectTicket);