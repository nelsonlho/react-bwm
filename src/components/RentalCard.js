import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/rental-card.css';

const RentalCard = (props) => {
    return (
        <Link to={ `/rentals/${props.id}` }>
            <div className='col-md-3 col-xs-6 bwm-card'>
                <div className='card'>
                    <img className='card-img-top' src={props.image} alt=''></img>
                    <div className='card-block'>
                    <h6 className='card-subtitle'>Whole {props.category} &#183; {props.city}</h6>
                    <h4 className='card-title'>{props.title}</h4>
                    <p className='card-text'>${props.dailyRate} per Night &#183; Free Cancelation</p>
                    <a href='' className='card-link'>More Info</a>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RentalCard;