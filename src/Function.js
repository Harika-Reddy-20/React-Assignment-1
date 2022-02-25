import React from 'react'
import './Style.css'

const Function = () => {
    return (
        <>
            <div>
                <h1 className='style'>Styling using Functional and Class Component</h1>
                <br/>
                <br/>
            </div>
            <div>
               <button className='function' onClick={()=> this.setState({})} >To see styling using in functional component
               </button>
               <div className='container1'>
                   
               <h1>This is created using Functional component</h1>
               <h5>This is done using external css</h5>
               <h5 style={{color:"blue"}}>This is using inline css</h5>
               </div>
            </div>
        </>
    )
}

export default Function