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



updateCardState = () => {
    let info={ title:this.props.title,
    description:this.props.description,
    image_url :this.props.image_url,
    horns :this.props.horns
    
    }

    this.props.showCard(info);
}




render() {
    return (
        <div>
        <Card style={{ width: '18rem' , height: "600px" , padding: "10px" , float: "left", margin: "10px" }}>
            <Card.Img onClick={this.updateCardState}  style={{height: "250px" ,  borderRadius: "8px" }} variant="top" src={this.props.image_url} alt={this.props.title} />
                <Card.Body >
                <div onClick={this.updateCardState} >
                    <Card.Title  >{this.props.title}</Card.Title>
                    <Card.Text  >
                        {this.props.description}
                    </Card.Text>
                    <Card.Text   >
                    Horns Number :{this.props.horns} 
                    </Card.Text>
                    <Card.Text   >
                    votes: {this.state.numofvote} 
                    </Card.Text>
                  
                </div>
                    <Button onClick={this.increaseNoOfVotes}  variant="primary">Vote</Button>
                </Card.Body>
            </Card>

        </div>
    )
}
}

export default HornedBeast