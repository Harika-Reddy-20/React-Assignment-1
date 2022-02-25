import React from 'react'
import './Style.css'

class Class extends React.Component {
    state = {
        show: true,
    }
    toggle = () => this.setState((nextState) => ({show : !nextState.show}));
    render() {
        return (
            <>
                <div>
                    <button className='class' onClick={this.toggle}>
                      {this.state.show ? 'To see styling using in class component': 'To see styling using in class component'}
                     </button>
                     {this.state.show &&  <div className='container'>
                    <h1>This is created using class component</h1>
                    <h5>This is done using external css</h5>
                    <h5 style={{ color: "blue" }}>This is using inline css</h5>
                </div>}
                </div>

            </>
        );
    }
}

export default Class