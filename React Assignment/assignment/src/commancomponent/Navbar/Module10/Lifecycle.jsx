import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        console.log("called constaructoe");
        super(props);
        this.state = {
          name:'anything',
          age:10,
          status:true,
          time: new Date()
        }
       }
       tick=()=>{
        console.log("called tick");
        this.setState({
          time : new Date()
        })
       }
       componentDidMount () {
         console.log("component did mount");
         this.timer = setInterval(
          () => this.tick(),1000
         )
       }
       shouldComponentUpdate  (nextProps, nextState)  {
        console.log("shouldComponentUpdate called",nextState);
        // console.log("nextState", nextState);
        return true
        // return false
       }
    componentDidUpdate = (prevProps, prevState) => {
      
    }
    
       
        render() {
            return (
                <>
                <div className="row mt-5">
    <h2>{this.state.time.toLocaleTimeString()}</h2>
    
                </div>
                <div className="row mb-5">
                    
                </div>
                </>
            );
        }
    }

export default Lifecycle;