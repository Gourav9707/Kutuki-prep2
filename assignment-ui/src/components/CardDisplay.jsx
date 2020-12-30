import React from 'react'
import {Link} from 'react-router-dom'
import './CardDisplay.css'
import Button from '@material-ui/core/Button';


const CardDisplay = (props) => {
    const path=props.id==0?'phonics':'maths';
    return (
        <div className='container'>

            <div className='row'>

                <div className='col image'>
                    <img src={props.image} width='300' height='280'/>
                </div>

                <div className='col'>
                    <div className= 'header'>
                        {props.head}
                    </div>
                    <div className='content'>
                        <p>
                            {props.para1}
                        </p>
                        <p>
                            {props.para2}
                        </p>
                    </div>
                    <div className='button'>
                        <Link to={"/"+path}>
                            <Button variant='contained' color='primary' >Learn More</Button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CardDisplay
