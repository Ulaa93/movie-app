import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUpcoming, selectMovie } from '../actions';
import { Link} from 'react-router-dom';

class Upcoming extends Component {
    componentDidMount() {
        this.props.fetchUpcoming();
    }

    renderList() {
        return this.props.upcomingPlay.map(mov=> {
      
            return (
                <div className="ui segment movie-now" key={mov.id} style={{ width: "220px", height: "380px", margin: "20px", padding: "0", textAlign: "center" }}>
                    <div className="ui image img-div-now" >
                        <img className="img-now" src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                            alt={mov.title} style={{ height: "300px", width: "100%" }} />
                        <div className="hidden-now" >
                        <Link to={`/singlemovieupcoming/${mov.id}`} onClick={() => this.props.selectMovie(mov)}>
                                <div className="description-now" >
                                <i className="far fa-play-circle" ></i>Description
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
        return <div className="ui centered grid segment container-now" style={{borderTop:"none", }} >{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { upcomingPlay: state.upcomingPlay,
        movie:state.movie };
}

export default connect(mapStateToProps, { fetchUpcoming, selectMovie })(Upcoming);
