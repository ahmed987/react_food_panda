import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
class Inprogress extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1>In progress</h1>
            <CardGroup>
      <Card>
        <CardImg top width="100%" src=" https://images-na.ssl-images-amazon.com/images/I/51vrdRDU4JL._SX351_BO1,204,203,200_.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Sizllers</CardTitle>
          <CardSubtitle>Gulshan iqbal</CardSubtitle>
          <CardText>2 Zinger + pepsi</CardText>
          <Button>Inprogress</Button>
        </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src="https://images.happycow.net/venues/1024/11/58/hcmp115804_376518.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kebabi</CardTitle>
          <CardSubtitle>Gulshan</CardSubtitle>
          <CardText>1 Mutton karhai</CardText>
          <Button>Inprogress</Button>
        </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src="https://pakistani.pk/uploads/reviews/photos/thumbnail/1500x500s/40/53/40/12274481-764749013653258-53057526924446921-n-94-1448988347.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Dua resturant</CardTitle>
          <CardSubtitle>highway</CardSubtitle>
          <CardText>2 behari boti</CardText>
          <Button>pending</Button>
        </CardBody>
      </Card>
    </CardGroup>


        </div> );
    }
}
 
export default Inprogress;