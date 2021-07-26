import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


class HornedBeast extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        numofvote: 0
    }
}

increaseNoOfVotes = () => {
    this.setState({
        numofvote: this.state.numofvote + 1
    })
}


render() {
    return (
        <div>
        <Card style={{ width: '18rem' , height: "500px" , padding: "10px" , float: "left", margin: "10px" }}>
            <Card.Img variant="top" src={this.props.image_url} alt={this.props.title}  style={{height: "250px" }}/>
            <Card.Body >
                <Card.Title  >{this.props.title}</Card.Title>
                <Card.Text>
                    {this.props.description}
                </Card.Text>
                
                <Card.Text>
                    votes: {this.state.numofvote}
                </Card.Text>
                <Button onClick={this.increaseNoOfVotes}  variant="primary">Vote</Button>
            </Card.Body>
        </Card>
        </div>
    )
}
}

export default HornedBeast