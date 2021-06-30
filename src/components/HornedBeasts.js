import React from 'react';
import Beasts from './Beasts';
import data from '../data/data.json'



class HornedBeasts extends React.Component {


    render() {

        return (
            <>

                {data.filter((beasts) => {
                    if (this.props.selectedHornValue === "All") {
                        return true;
                    } else if (this.props.selectedHornValue === "one") {
                        return beasts.horns === 1;
                    } else if (this.props.selectedHornValue === "two") {
                        return beasts.horns === 2;
                    } else if (this.props.selectedHornValue === "three") {
                        return beasts.horns === 3;
                    } else {
                        return beasts.horns === 100;
                    }

                }).map((item, index) => {
                    return (
                        <Beasts key={index} src={item.image_url} title={item.title} description={item.description} keyword={item.keyword} horns={item.horns} />
                    )
                })}

            </>
        )
    }
}

export default HornedBeasts;