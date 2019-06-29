import React, { Component } from 'react';
import firebase from '../config/firebase'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
   
class DataRendering extends Component {
    constructor(props) {
        super(props);
        this.state = { users:'' }
    }

    


    
    // componentDidMount() {
    //     const {users }=this.state;
    //     var arr={}
    //     var UserRef = firebase.database().ref('resturant/');
    
    //     UserRef.once("value", function(snapshot) {
    //       arr=snapshot.val();
    //         console.log(arr.users);
            
    //     }, function(error){
    //         console.log("Error: " + error.code);
    //     });
    //     console.log(arr);
    //     setTimeout(()=>{ 
    //         this.setState({users:arr})

    //     }, 3000);
    //     console.log(users);
    //     // var variable ={arr}
    // }
    render() {
        console.log(this.state.users);

// let newData=this.state.users;
// let mapData=newData.map((data)=>{
//     console.log(data)
// })

        for(var key in this.state.users){
            
        
            console.log(key)
              
            
        }
        return ( 
            <div>
<CardGroup>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://image.shutterstock.com/display_pic_with_logo/136306/722718082/stock-photo-healthy-food-clean-eating-selection-fruit-vegetable-seeds-superfood-cereals-leaf-vegetable-on-722718082.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/food-top10/pagePropertiesImage/thai-som-tum.jpg.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>



                {/* <button onClick="firebaseFunc()" /> */}
{/* <h1>{this.state.users}</h1> */}
            </div>
         );
    }
}
 
export default DataRendering;