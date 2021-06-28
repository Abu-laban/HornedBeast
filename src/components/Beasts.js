import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Beasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
    }

    increaseNoOfLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {
        return (
            <>
                <div className='hBeastsCss'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.src} alt={this.props.keyword} title={this.props.title} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Title>🎲 Beast horns : {this.props.horns}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <Card.Text>
                                👍  {this.state.likes}
                            </Card.Text>
                            <Card.Text>
                                👇 Click to vote
                            </Card.Text>
                            <Button variant="primary" onClick={this.increaseNoOfLikes}>👉➕👈</Button>
                        </Card.Body>
                    </Card>
                </div>
            </>
        )
    }
}

export default Beasts;