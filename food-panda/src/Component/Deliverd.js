import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
class Deliverd extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1>Deliverd</h1>
            <CardGroup>
      <Card>
        <CardImg top width="100%" src=" https://2.bp.blogspot.com/-TaPDKEaTIZA/W8Ws7uowIEI/AAAAAAAAWc4/7XYBgsH5vhU9ejvhK8aLT82LUREZf-83QCLcBGAs/s1600/The%2Bvalley%2Brestaurant%2Bkarachi.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Sizllers</CardTitle>
          <CardSubtitle>Gulshan iqbal</CardSubtitle>
          <CardText>2 Zinger + pepsi</CardText>
          <Button>deliverd</Button>
        </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src="https://images.happycow.net/venues/1024/11/58/hcmp115804_376518.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kebabi</CardTitle>
          <CardSubtitle>Gulshan</CardSubtitle>
          <CardText>1 Mutton karhai</CardText>
          <Button>Deliverd</Button>
        </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src="https://pakistani.pk/uploads/reviews/photos/thumbnail/1500x500s/40/53/40/12274481-764749013653258-53057526924446921-n-94-1448988347.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Dua resturant</CardTitle>
          <CardSubtitle>highway</CardSubtitle>
          <CardText>2 behari boti</CardText>
          <Button>Deliverd</Button>
        </CardBody>
      </Card>
    </CardGroup>

        </div> );
    }
}
 
export default Deliverd;