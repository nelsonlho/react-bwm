import React from 'react';
import RentalCard from './RentalCard';
import '../styles/rental-listing.css'
import { connect } from 'react-redux';
import * as actions from '../actions';

class RentalListing extends React.Component {

    renderRentals = () => {
        return this.props.rentals.map( rental => 
            <RentalCard key={rental.id}
                        id={rental.id}
                        title={rental.title}
                        city={rental.city}
                        category={rental.category}
                        dailyRate={rental.dailyRate}
                        image={rental.image}
                        description={rental.description}/>
        )     
    }

    componentDidMount() {
        this.props.dispatch(actions.fetchRentals());
    }

    render() {
        return (
            <section className='rental-listing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                <div className='row'>
                    {this.renderRentals()}
                </div>
                <button onClick={() => this.addRental()}>Add Rental</button>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        rentals: state.rentals.data
    }
}

export default connect(mapStateToProps)(RentalListing);