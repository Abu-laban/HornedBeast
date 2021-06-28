import React from 'react';
import Beasts from './Beasts';
import data from '../data/data.json'



class HornedBeasts extends React.Component {



    render() {
        return (
            <>
                {data.map((item, index) => {
                    return (
                        <Beasts key={index} src={item.image_url} title={item.title} description={item.description} keyword={item.keyword} horns={item.horns} />
                    )
                })}

            </>
        )
    }
}

export default HornedBeasts;