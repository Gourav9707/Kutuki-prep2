import React from 'react'
import './LiveDetail.css'
import Widget from './Widget'
import PackageSection from './PackageSection';
import Pic from '../assests/pic.png'
import AgePic from '../assests/agepic.png'
import CertifiedPic from '../assests/certifiedpic.png'
import KutukiApp from '../assests/kutukiapp.png'
import GwPic from '../assests/gwpic.png'

const LiveDetail = (props) => {
    return (
        <>
            <div className='L-container'>

                <div className='L-row'>

                    <div className='L-col'>
                        <div className= 'L-header'>
                            {props.head}
                        </div>
                        <div className='L-content'>
                            <p>
                                {props.para1}
                            </p>
                            <p>
                                {props.para2}
                            </p>
                        </div>
                    </div>

                    <div className='L-col L-image'>
                        <img src={props.image}/>
                    </div>

                </div>

            </div>

            <div className='L-container'>

                <div className= 'L-header' style={{color: 'blue'}}>
                    {props.phead}
                </div>
                <div className='L-row'>
                    <div className='L-col' style={{maxWidth: '70%'}}>
                    <p>
                    {props.ptext} 
                    </p>
                    </div>
                </div>


                <div className='L-row'>

                    <div className='L-col' >
                        <ul style={{ listStyle:'none', textAlign:'left'}}>
                            <li style={{contain: '✓ '}}>Develop Reading Fluency</li>
                            <li>Improve Reading Comprehension</li>
                            <li>Read Independently</li>
                            <li>Spell Correctly</li>
                            <li>Most importantly, improve self confidence</li>
                        </ul>
                    </div>

                    <div className='L-col image'>
                        <img src={Pic}/>
                    </div>

                </div>

                <div className='W-row'>

                        <Widget
                        image={AgePic}
                        head={"Age Appropriate"}
                        description={"Kutuki’s program is designed for the youngest of readers, from 3-7 years"}
                        />

                        <Widget
                        image={CertifiedPic}
                        head={"Kutuki App"}
                        description={"Certified teachers who have benefitted thousands of children across India"}
                        />
              
                        <Widget
                        image={KutukiApp}
                        head={"Age Appropriate"}
                        description={"Combines the learning of phonics with Kutuki’s stories and rhymes  ensuring learning and revision is always fun"}
                        />

                        <Widget
                        image={GwPic}
                        head={"Games and Worksheets"}
                        description={"Tracing and reading games and printable worksheets"}
                        />

                </div>
                <div className='L-row'>
                    <PackageSection/>
                </div>

            </div>
        </>
    )
}

export default LiveDetail
