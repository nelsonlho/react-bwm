import React from 'react';
import RentalCard from './RentalCard';
import '../styles/rental-listing.css'

class RentalListing extends React.Component {
    state = {
        rentals: [1, 2, 3]
    }

    renderRentals() {
        return this.state.rentals.map( rental => <RentalCard/>)
    }

    render() {
        return (
            <section class='rental-listing'>
                <h1 class='page-title'>Your Home All Around the World</h1>
                <div class='row'>
                    {this.renderRentals()}
                </div>
            </section>
        );
    }
}

export default RentalListing;