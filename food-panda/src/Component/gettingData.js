import React, { Component } from 'react';
import firebase from '../config/firebase'

class GettingData extends Component {
    constructor(props) {
        super(props);
        this.state = {array:''  }
        const {users }=this.state;
    }


    componentDidMount() {
        var arr={}
        var UserRef = firebase.database().ref('resturant/');
      
        UserRef.once("value", (data) => {
          let allData = data.val()
          let arrayData= []
          for (var key in allData) {
              var searchedObj= allData[key];
              arrayData.push(searchedObj)
            }
           const lastArray= arrayData.filter((v) => {
              console.log(v.info.email)
            })
console.log(lastArray)
          })
          }
          
            // console.log('array===>>>>', array)
                  // this.setState({
                  //   allData:array
                  // })
            
        // }, 
        // this.setState({arr})
      
      // console.log(this.state.array)
        // function(error){
        //     console.log("Error: " + error.code);
        // console.log(arr);
        // setTimeout(()=>{ 
        //     this.setState({users:arr})

        // }, 3000);
        // console.log(users);
        // var variable ={arr}
          
    render() { 
        return ( 
            <div>

            </div>
         );
    }
}
 
export default GettingData;
