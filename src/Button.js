import React from 'react'
import './Style.css'

class Button extends React.Component {
    state = {
        show: true,
    }
    toggle = () => this.setState((currentState) => ({show : !currentState.show}));
    render() {
        return (
            <>
                <div>
                    <button className='function' onClick={this.toggle}>
                      {this.state.show ? 'To see styling using in Functional component': 'To see styling using in Functional component'}
                     </button>
                     {this.state.show &&  <div className='container1'>
                    <h1>This is created using Functional component</h1>
                    <h5>This is done using external css</h5>
                    <h5 style={{ color: "blue" }}>This is using inline css</h5>
                </div>}
                </div>

            </>
        );
    }
}

export default Button