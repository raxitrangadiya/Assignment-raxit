import React, { Component } from "react";

class StateMethod extends Component {
    state = { counter: 0 }
    HandleIncriment = () => {
        let value = this.state.counter + 1;
        this.setState({ counter: value })
    }
    HandleDecriment = () => {
        let value = this.state.counter - 1;
        this.setState({ counter: value })
    }
    handleChange = (a) => {
        let value = a.target.value ? parseInt(a.target.value) : 0
        this.setState({ counter: value })
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

              
            </>
        );
    }
}

export default StateMethod;
