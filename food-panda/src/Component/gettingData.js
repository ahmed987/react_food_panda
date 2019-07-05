import React, { Component } from 'react';
import firebase from '../config/firebase'
import { isTemplateElement } from '@babel/types';

class GettingData extends Component {
    constructor(props) {
        super(props);
        this.state = {array:'',users:'' }
        // const {users }=this.state;
    }


    componentDidMount() {
        var arr=[]
        var UserRef = firebase.database().ref('data/resturants/');
      
        UserRef.once("value", (data) => {
          const allData = data.val()
          console.log(allData)
          Object.keys(allData).map((uid)=>{
            // console.log(allData[uid].info.email)
            var obj = {
              'ResturantData': allData[uid].info,
              
            }
            // console.log(obj)
            this.setState({
              obj
            })
          })
        });
//           
}

render() { 
  const {obj} = this.state;
  // var vari=this.state.obj
      // this.state.obj && this.state.obj.ResturantData.map((a)=>{
        // console.log(this.state.obj&&this.state.obj.ResturantData.email)
      // })
        return ( 
            <div>
              <h1>header</h1>
              <ul>
{this.state.obj &&  Object.keys(this.state.obj).map((index,item)=>{
  
  console.log(this.state.obj.ResturantData.email)
  return  <li key={index}>{this.state.obj && this.state.obj.ResturantData.email}</li> 
    })
    
  }
  </ul>
                    
               {/* <div className="col-xl-12">

{this.state.obj.map(developer => (
                <div
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{developer.name}</h5>
                    <p className="card-text">{developer.email}</p>
                    <button
                      onClick={() => this.removeData(developer)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(developer)}
                      className="btn btn-link"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
              </div> */}


                            {/* <p>{this.state.obj && this.state.obj.map((aq)=>{aq.email})}
            </div>
          </p> */}
          </div>
         );
    }
}
 
export default GettingData;
