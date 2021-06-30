import React from 'react';
import HornedBeasts from './HornedBeasts';
import FilterBar from './FilterBar';




class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedHornValue: "All",
        }
    }

    updateHornValue = (event) => {
        event.preventDefault();
        this.setState({
            selectedHornValue: event.target.value,
        });
    }



    render() {

        return (
            <>

                <FilterBar updateHornValue={this.updateHornValue} />


                <HornedBeasts selectedHornValue={this.state.selectedHornValue} />

            </>
        );
    }
}

export default Main;