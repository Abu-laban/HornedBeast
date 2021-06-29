import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import SelectedBeast from './SelectedBeast';

class Beasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            showHide: false
        }
    }

    increaseNoOfLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    handleModalShowing = () => {
        this.setState({ showHide: true })

    }

    handleModalClosing = () => {
        this.setState({ showHide: false })
    }

    render() {
        return (
            <>
                <div className='hBeastsCss'>
                    <Card style={{ width: '18rem' }} onClick={this.handleModalShowing}>
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
                    <SelectedBeast show={this.state.showHide} closing={this.handleModalClosing} src={this.props.src} title={this.props.title} description={this.props.description} />
                </div>
            </>
        )
    }
}

export default Beasts;