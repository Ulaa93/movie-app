import React, {Component} from 'react';
import Modal from './Modal';
import { selectMovie, fetchSingleMovie } from '../actions';
import { connect } from 'react-redux';
import NowPlaying from './NowPlaying'
import { NavLink } from 'react-router-dom';


class SingleMovie extends Component{
constructor(props){
       super(props)
    this.state={
        movie:this.props.movie,
        singleMovie:{}
    }
    console.log(this.state)
    console.log(this.props)
}
    componentDidMount(){
console.log(this.props);
console.log(this.props.match.params.id);

this.props.fetchSingleMovie(this.props.movie)

    }
   
renderActions(movie){
    return(
        <React.Fragment>
            <NavLink to="/">
            <button className="ui button negative">Exit</button>
            </NavLink>
            <NavLink to={`/reservationdate/${this.props.movie.id}`}>
            <button className="ui button primary">Booking</button>
            </NavLink>
        </React.Fragment>
    );
}
renderContent(){
    console.log(this.props)
    if(!this.props.movie){
      return " You have to select movie first!"
    }
    return(
    <div className="ui divided items">
    <div className=" item">


    <div className="ui small image">
    <img className="image" src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}/>    </div>
   
        <div className="middle aligned content">

      <div className="ui segment">  <h3>Overview</h3>
      <p> {this.props.movie.overview}</p>
   </div>
<div className="ui segment">
    <h3>Release date</h3>
    <p>{this.props.movie.release_date}</p>
</div>
</div>
</div>
</div>
    )
}

render(movie){
    
    console.log(movie)
    return(
        <div>
            <NowPlaying />
            <Modal
            title={this.props.movie.title}
            overview={this.renderContent()}
            actions={this.renderActions()}
            />
            </div>
       
    )
}
}

const mapStateToProps = (state,) => {
    console.log(state)
    return { 
        movie: state.movie,
        singleMovie: state.singleMovie
   };
    
}
    

export default connect(mapStateToProps, {selectMovie, fetchSingleMovie  })(SingleMovie);
