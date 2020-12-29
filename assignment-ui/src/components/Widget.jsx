import React from 'react'
import './Widget.css'

const Widget = (props) => {
    return (
        <div className='W-container'>
        
            <div className='W-image'>
                <img src={props.image}/>
            </div>
            <div className='W-head'>
                {props.head}
            </div>
            <div className='W-para'>
                {props.description}
            </div>

        </div>
    )
}

export default Widget
