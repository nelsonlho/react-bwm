import React from 'react';
import '../styles/rental-card.css';

const RentalCard = () => {
    return (
        <div class='col-md-3 col-xs-6 bwm-card'>
            <div class='card'>
                <img class='card-img-top' src='http://via.placeholder.com/350x250' alt=''></img>
                <div class='card-block'>
                <h6 class='card-subtitle'>Whole Apartment &#183; New York</h6>
                <h4 class='card-title'>Some nice apartment</h4>
                <p class='card-text'>$240 per Night &#183; Free Cancelation</p>
                <a href='' class='card-link'>More Info</a>
                </div>
            </div>
        </div>
    );
}

export default RentalCard;