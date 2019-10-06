import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlaying, selectMovie } from '../actions';
import { Link, withRouter } from 'react-router-dom';


class NowPlaying extends Component {
    constructor(props){
        super(props);
        this.props.fetchNowPlaying();
        this.state={
            movie:this.props.movie,
            date:'',
            hour:'',
            tickets:{},
            selectedSeats:[],
            placeChecked: [],
            booking:{}

        }
    }

     componentDidUpdate(movie) {
        console.log(this.state.movie)
        this.props.selectMovie(this.state.movie);
        console.log(this.state)
            }


    onClickMovie=(e)=>{
        console.log(this.state)

        this.setState({
           movie: this.props.selectMovie(e)

})
console.log(this.state)

    }
    renderList() {
        console.log(this.state)

        console.log(this.props.movie)
        return this.props.nowPlay.map(mov => {
            return (
                <div className="ui segment movie-now" key={mov.id} style={{ width: "220px", height: "380px", margin: "20px", padding: "0", textAlign: "center" }}>
                    <div className="ui image img-div-now" >
                        <img className="img-now" src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                            alt={mov.title} style={{ height: "300px", width: "100%" }} />
                        <div className="hidden-now" >
                            <Link to={`/reservationdate/${mov.id}`} key={mov.id} onClick={() => {
                        this.props.selectMovie(mov)}}>
                                <div className="reservation-now">Buy ticket</div>
                            </Link>
                            <Link to={`/singlemovie/${mov.id}`} onClick={() => this.props.selectMovie(mov)}>
                                <div className="description-now" >
                                    <i className="far fa-play-circle" ></i> Description
                            </div>
                            </Link>
                        </div>
                    </div>
                    <h3 className="title-now">{mov.title}</h3>
                </div>
            )
        })
    }

    render() {
        return (
        <div className="ui centered grid segment container-now" style={{borderTop: "none" }} >{this.renderList()}
   
    </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { nowPlay: state.nowPlay, movie:state.movie };
}


export default withRouter(connect(mapStateToProps, { fetchNowPlaying, selectMovie })(NowPlaying));