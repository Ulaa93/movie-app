import React, {Component} from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import Modal from './Modal'
import { selectSeats, findBookings, selectTicket } from '../actions';
import NowPlaying from './NowPlaying'

class PlaceSelection extends Component 
{
    constructor(props) {
        super(props);
        this.props.findBookings(this.props.movie.id, this.props.date, this.props.hour);
    this.props.selectSeats(this.props.movie, this.props.date, this.props.hour, this.props.tickets)
        console.log(this.state)
        console.log(this.props.findExistBookings)
        this.state = {
            movie:this.props.movie,
            date: this.props.date,
            hour:this.props.hour,
            tickets:this.props.tickets,
            user:{},
      booking:{},
             selectedSeats:[],
            place: [
                '1', '2', '3', '4', '5', '6', '7', '8', 
                '9', '10','11', '12', '13', '14', '15', '16', 
                '17', '18', '19', '20','21', '22', '23', '24', 
                '25', '26', '27', '28', '29', '30','31', '32'
            ],
            placeAvailable: [
                '1', '2', '3', '4', '5', '6', '7', '8', 
                '9', '10','11', '12', '13', '14', '15', '16', 
                '17', '18', '19', '20','21', '22', '23', '24', 
                '25', '26', '27', '28', '29', '30','31', '32'
            ],
             placeChecked: [],
            placeReserved: this.props.findExistBookings,
            maxChecked: this.props.tickets.quantity
        };
        console.log(this.state)
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectSeats !== prevProps.selectSeats) {
            this.setState({placeChecked: this.props.selectedSeats});
        }
        if (this.props !== prevProps) {
            this.setState({
                placeReserved: this.props.findExistBookings.map(booking => {
                    return booking.seats;
                })
                .flat()
            });
        }
    }

    onClickChoice(place) {
        if (this.state.placeReserved.indexOf(place) === -1) {
            if (this.state.placeChecked.indexOf(place) > -1) {
                this.setState({
                    placeAvailable: this.state.placeAvailable.concat(place),
                    placeChecked: this.state.placeChecked.filter(res => res !== place)
                });
            } else if (this.state.placeChecked.length < this.state.maxChecked) {
                this.setState({
                    placeChecked: this.state.placeChecked.concat(place),
                    placeAvailable: this.state.placeAvailable.filter(res => res !== place),
                    selectedSeats:[this.state.placeChecked]
                })
            }
        }
        
    }
    submitHandler = (event,place) => {
        event.preventDefault();
        this.setState({
            placeChecked: this.state.placeChecked.concat(place),
            placeAvailable: this.state.placeAvailable.filter(res => res !== place)
        })
        this.props.selectSeats([...this.state.placeChecked]);
      
       console.log(event.target.value)
       console.log(this.props.match.params.id);
    
       //window.location.href=`/movie-app/#/personalinfo/${this.props.movie.id}`
         }

    render() {
        
        const form=(
            <div className = "ui container center aligned">
                       
             <div className="ui segment chairGrid">
            <ChairGrid place={this.state.place}
                      placeAvailable={this.state.placeAvailable}
                      placeReserved={this.state.placeReserved}
                      checked={this.state.placeChecked}
                      onClickChoice={this.onClickChoice.bind(this)}/> 
                 </div>
                  <div>
                  <NavLink to="/">
                        <button type="button" className="ui button negative big" >Exit</button>
                    </NavLink >
                    <NavLink  to={`/selectticket/${this.props.movie.id}`}>
                        <button type="button" className="ui button black big" >Back</button>
                    </NavLink >
                    <NavLink  to={`/personalinfo/${this.props.movie.id}`}>
                        <button type="submit" className="ui button big primary" onClick={this.submitHandler.bind(this)}>Next</button>
              </NavLink>
                </div>     
        </div>

        )
        return (
            <div>
            <NowPlaying />
            <Modal
            title= "Select seats"
            overview={form}
            />
            </div>
        )
    }
}
    
class ChairGrid extends Component
{   
    render() {
        return (
            <div className = " containerChair">
                <h4 className="screen"> SCREEN </h4>
              
                <div className = "chairgrid ui segment">
                            {this.props.place.map(place => 
                                <div className={this.props.checked.indexOf(place) > -1 ?'chairchecked' :
                                               this.props.placeReserved.indexOf(place) > -1 ?'chairreserved' :'chairavailable'}
                                    key={place}
                                    onClick={ e => this.onClickPlace(place)}>
                                    <span> {place} </span>
                                </div>)
                            } 
                </div>
            </div> 
        )
    }
                        
    onClickPlace(place) {
        this.props.onClickChoice(place);
    }
}
                                    



const mapStateToProps = state => {
    console.log(state)
    return {
        selectedSeats: state.selectedSeats,
        movie: state.movie,
        date: state.date,
        hour: state.hour,
        findExistBookings: state.findExistBookings,
        tickets: state.tickets,
         placeChecked: state.placeChecked,
        
    };
}
                            
export default connect(mapStateToProps, { selectSeats, findBookings })(PlaceSelection);