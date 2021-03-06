import React from 'react'
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Table from './Table'

const PackageItems = (props) => {
    return (
        <div className='packageelement'>

        <div className='packageitem'>
            <img src={props.image} width='160' height='160'/>
        </div>

        <div className='packageitem'>
            {props.head}
        </div>

        <div className='packageitem'>
           {props.subhead}
        </div>

        <div className='packageitem'>
            {props.list}
        </div>

        <div className='packageitem'>
           {props.classes}
        </div>

        <div className='packageitem classdetails'>
            <div className='classgroup'>
                {props.classgroup}
            </div>
            <div className='classprice'>
                {props.classbudget}
            </div>
        </div>

        <div className='packageitem upcomingbatch'>
            <h4 style={{margin:'5px'}}>Upcoming Batch - View Schedule </h4>
            <ArrowRightIcon/>
            <hr/>
        </div>
        <div className='packageitem'>
            <Table
                coloumn={props.coloumn}
                data={props.data}
            />
        </div>
       <div className='pacakageitem'>
            <Button
            style={{
            borderRadius: 20,
            backgroundColor: "green",
            padding: "18px 36px",
            fontSize: "15px",
            color: "white"
            }}
            variant="contained"
            >
                Book Now
            </Button>
       </div>

    </div>
    )
}

export default PackageItems
