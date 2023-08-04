import React, { Component } from "react";

class StateMethod extends Component {
    state={counter : 0}
    HandleIncriment=()=>{
        let value =this.state.counter + 1;
        this.setState({counter:value})
    }
    HandleDecriment=()=>{
        let value =this.state.counter - 1;
        this.setState({counter:value})
    }
    handleChange=(a)=>{
let value=a.target.value ? parseInt(a.target.value):0
this.setState({counter : value})
    }
//   state = {
//     name: "raxit",
//     age: 22,
//     number: 9839898928,

//   };
// start function 
  clickHandleCustom = () => {
    this.setState({});
    // console.log("click called");
  };
  
//   end function
  render() {
    return (
      <>
        <div className="row mb-6">
          <h2>State</h2>
          <p>
            React, state refers to a structure that keeps track of how data
            changes over time in your application. Managing state is a crucial
            skill in React because it allows you to make interactive components
            and dynamic web applications.
          </p>
        </div>

        {/* <button onClick={this.clickHandleCustom}>button</button> */}

        <div className="row align-items-center">
            <div className="col-lg-12 d-flex align-items-center  justify-content-center" >
                <button className="btn btn-outline-success m-2" onClick={this.HandleIncriment}>Like  +</button>
                <input className="align-item-right text-light text-center bg-danger bg-opacity-10 border border-info rounded" type="text" value={this.state.counter} onChange={this.handleChange} />
                <button className="btn btn-outline-danger m-2" onClick={this.HandleDecriment}>Deslike  -</button>
            </div>
           

              
        </div>
      </>
    );
  }
}

export default StateMethod;
