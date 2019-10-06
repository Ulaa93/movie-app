import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props =>{
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e)=>e.stopPropagation()} className="ui standard modal visible active">
                <div className="header" style={{textAlign:"center"}}><h2>{props.title}</h2></div>
                
               <div className=" content" >
                         <div>{props.overview}</div>
                </div>
                <div className="actions">
                {props.actions}
                </div>
            </div>
               
           
        </div>,
        document.querySelector('#modal')

    )
}

export default Modal;