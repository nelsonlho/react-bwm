import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class RentalDetail  extends React.Component {
    componentWillMount() {
        const rentalId = this.props.match.params.id;
        this.props.dispatch(actions.fetchRentalById(rentalId));
    }

    render() {
        const rental = this.props.rental;
        console.log(this.props)
        return (
            <div>{rental.description}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetail);