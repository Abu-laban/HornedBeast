import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'




class FilterBar extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>View the beasts by the number of horns</Form.Label>
                        <Form.Control as='select' custom onChange={this.props.updateHornValue}>
                            <option value='All'>All...</option>
                            <option value='one'>1</option>
                            <option value='two'>2</option>
                            <option value='three'>3</option>
                            <option value='100'>Wow..</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
export default FilterBar;