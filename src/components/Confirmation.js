import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NowPlaying from './NowPlaying'

import { confirmBooking } from '../actions';


class Confirmation extends Component {


    submitHandler = e => {
        e.preventDefault()
        this.props.confirmBooking(this.props)
        console.log(this.props);
        window.location.href = `/`
    }




    render() {

        console.log(this.props.movie.id, this.props.movie.title, this.props.date, this.props.hour)

        let movie_id = this.props.movie.id
        let movie_title = this.props.movie.title
        let ticket_quantity = this.props.tickets.quantity


        const confirm = (

            <div className="ui center aligned container " >

                <div className="ui segment" style={{ backgroundColor: "rgba(244, 201, 23, 0.6)" }}>
                    <h3>Information about booking: </h3>
                    <p>Title movie: <b>{movie_title}</b></p>
                    <p>Date of seans: <b>{this.props.date}</b> </p>
                    <p>Hour of seans: <b>{this.props.hour}</b> </p>
                    <p>Tickets: Student: <b>{this.props.tickets.student}</b> | Normal: <b>{this.props.tickets.normal}</b>  </p>
                    <p>Seats: <b>{this.props.selectedSeats.join(", ")}</b> </p>
                    <p>To pay: <b>{this.props.tickets.totalPrice}</b></p>
                </div>
                <div className="ui segment" style={{ backgroundColor: "rgba(244, 201, 23, 0.6)" }}><h3>Your personal information: </h3>
                    <p>Name: <b>{this.props.user.name}</b></p>
                    <p>Last Name: <b>{this.props.user.lastName}</b></p>

                    <p>Email: <b>{this.props.user.email}</b></p>
                </div>

                <div>
                    <NavLink to="/">
                        <button type="button" className="ui button negative big" >Exit</button>
                    </NavLink >
                    <NavLink to={`/personalinfo/${this.props.movie.id}`}>
                        <button type="button" className="ui button black big" >Back</button>
                    </NavLink >
                    <button type="submit" className="ui button big positive" onClick={this.submitHandler.bind(this)}
                    >Confirm</button>
                </div>
            </div>

        )


        return (
            <div>
                <NowPlaying />

                <Modal
                    title="Confirm your booking"
                    overview={confirm}
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
        hour: state.hour,
        tickets: state.tickets,
        selectedSeats: state.selectedSeats,
        user: state.user,
    };
}

export default connect(mapStateToProps, { confirmBooking })(Confirmation);
