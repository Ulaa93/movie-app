import React, { Component } from 'react';
import Modal from './Modal';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NowPlaying from './NowPlaying'
import { selectMovie, selectDate, selectHour, selectSeats, selectTicket, userInfo } from '../actions';


class UserInfo extends Component {

  constructor(props) {
    super(props);
    console.log(this.state)

    console.log(this.props);
    this.props.userInfo(this.props.match.params.id, this.props.date, this.props.hour, this.props.hour, this.props.tickets, this.props.selectSeats);
    console.log(this.state)
    this.state = {
      movie:this.props.movie,
      date: this.props.date,
      hour:this.props.hour,
      tickets:this.props.tickets,
      selectedSeats:this.props.selectedSeats,
      user:{},
      booking:{},
      name:'',
      lastName:'',
      email:''
     
  }
  }
  componentDidMount() {
    console.log(this.state)
    console.log(this.state)

    console.log(this.props.match.params.id);
    this.props.userInfo(this.props.movie, this.props.date, this.props.hour, this.props.tickets, this.props.selectedSeats);
  }
  
  componentDidUpdate() {
    console.log(this.state)
    this.props.userInfo(this.state.user);
    console.log(this.state.user)
  console.log(this.state)
  }
  
  submitHandler = (event) => {
    console.log(this.state)
    event.preventDefault();
    this.setState({user:{name:this.state.name, lastName:this.state.lastName, email:this.state.email}});
    this.props.selectTicket(this.state.tickets);
    console.log(this.state.user);
    window.location.href=`/#/confirmation/${this.props.movie.id}`;
  }

  render(movie) {
   
    const title = (
      <div >tytuł
                   </div>
    )
    const info = (
      <form className="ui center aligned container reservationForm " onSubmit={this.submitHandler.bind(this)} >
        <div className="ui segment " >
          <div className="ui segment big" style={{ textAlign: "right", backgroundColor: "rgba(244, 201, 23, 0.6)" }}><label>Name:</label><input type="text" style={{ padding: "5px", marginLeft: "20px", width: "50%" }} required  onChange={e => this.setState({name: e.target.value})}/></div>
          <div className="ui segment big" style={{ textAlign: "right", backgroundColor: "rgba(244, 201, 23, 0.6)" }}> <label>Last Name:</label><input type="text" style={{ padding: "5px", marginLeft: "20px", width: "50%" }} required  onChange={e => this.setState({lastName: e.target.value})}/></div>
          <div className="ui segment big" style={{ textAlign: "right", backgroundColor: "rgba(244, 201, 23, 0.6)" }}><label>Email:</label> <input type="email" style={{ padding: "5px", marginLeft: "20px", width: "50%" }} required  onChange={e => this.setState({email: e.target.value})}/></div>
        </div>
        <div>
        <NavLink to="/">
                        <button type="button" className="ui button negative big" >Exit</button>
                    </NavLink >
                    <NavLink  to={`/selectseats/${this.props.movie.id}`}>
                        <button type="button" className="ui button black big" >Back</button>
                    </NavLink >
                        <button type="submit" className="ui button big primary" onSubmit={this.submitHandler.bind(this)}>Next</button>
                      

                </div>
      </form>
    )

    
    return (
      <div>
       <NowPlaying />
      <Modal
        title="Enter your personal info"
        overview={info}
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
    user: state.user
  };
}

export default connect(mapStateToProps, { selectMovie, selectDate, selectHour, selectTicket, selectSeats, userInfo })(UserInfo)