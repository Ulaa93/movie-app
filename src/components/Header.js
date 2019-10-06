import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="ui top attached tabular menu header-my" style={{marginTop:'10px', backgroundColor:"rgba(244, 201, 23, 0.8)"}}>

            <div className="item">
                <h1>Movie app!</h1>
            </div>
            <div className="right menu" style={{marginRight:"60px"}} >
                <NavLink to="/now_playing" className="item">
                   <h3>Now playing</h3>
                 </NavLink>
                <NavLink to="/upcoming" className="item">
                  <h3>Upcoming</h3>
                </NavLink>
            </div>
           

        </header>
    );
};

export default Header;