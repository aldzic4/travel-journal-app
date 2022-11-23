import React from "react";
// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

// fontawesome.library.add(faCheckSquare, faCoffee);

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--left">
                <img className="card--image" src={`../Images/${props.item.image}`}/>
            </div>
            <div className="card--informations">
                <div className="card--location">
                {/* <FontAwesomeIcon icon="check-square" /> */}
                                <span className="card--location--text">{props.item.country}</span>
                    <a className="card--text" href="{props.item.mapUrl}" target="_blank">View on Google Maps</a>
                </div>
                <div className="card--title">
                    <span className="card--title--text">{props.item.location}</span>
                </div>
                <div className="card--date">
                    <span className="card--date--text">{props.item.dateFrom} - {props.item.dateTo}</span>
                </div>
                <div className="card--desc">
                    <p className="card--desc--text">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}