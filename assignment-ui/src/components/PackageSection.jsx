import React from 'react'
import './PackageSection.css'
import PackageItems from './PackageItems'
import Curious from '../assests/curious.jpg'
import Genius from '../assests/genius.jpg'
import Learner from '../assests/learner.jpg'

const PackageSection = () => {
    return (
        <div className='package'>

            <div className='packagehead' style={{background: '#6ec1e4'}}>
                <h1>Packages</h1><br></br>
                <p style={{textAlign: 'center'}}>We offer 3 packages tailor made to suit different learning levels</p>
            </div>

            <div className='packagelist'>

               <PackageItems
                    image={Learner}
                    head={(<h2 style={{color:'yellow'}}>Little Learners</h2>)}
                    subhead={(<p style={{textAlign:'center'}}>For 3 – 4 Year Olds</p>)}
                    list={(
                        <ul style={{listStyle:'none', textAlign:'left'}}> 
                            <li>Listen, Identify and Blend 10  Letter sounds</li>
                            <li>Form basic CVC words</li>
                            <li>Letter Writing Practice</li>
                        </ul>
                            )}
                    classes={( <h4>10 Classes</h4>)}
                    classgroup={(<h5>Group Classes (Up to 4 per group)</h5>)}
                    classbudget={(
                        <div>
                        <p style={{textAlign:'center'}}>Package Cost – Rs. 3,000 </p>
                        <p style={{textAlign:'center'}}>Rs. 300/ class</p><br/>
                        <p style={{textAlign:'center'}}>* – 1 month subscription to Kutuki’s app free!</p>
                        </div>
                    )}
               />

                <PackageItems
                    image={Curious}
                    head={(<h2 style={{color:'blue'}}>Curious Champions</h2>)}
                    subhead={(<p style={{textAlign:'center'}}>For 4 – 5 Year Olds</p>)}
                    list={(
                        <ul style={{listStyle:'none', textAlign:'left'}}> 
                            <li>Listen, Identify and Blend 26 Letter sounds</li>
                            <li>Master CVC words</li>
                            <li>Sight Words</li>
                            <li>Master Short and Long vowel</li>
                            <li>Letter Writing Practice</li>
                        </ul>
                            )}
                    classes={( <h4>25 Classes</h4>)}
                    classgroup={(<h5>Group Classes (Up to 4 per group)</h5>)}
                    classbudget={(
                        <div>
                        <p style={{textAlign:'center'}}>Package Cost – Rs. 5,625 </p>
                        <p style={{textAlign:'center'}}>Rs. 225/ class</p><br/>
                        <p style={{textAlign:'center'}}>* – 3  month subscription to Kutuki’s app free!</p>
                        </div>
                    )}
               />

                <PackageItems
                    image={Genius}
                    head={(<h2 style={{color:'green'}}>Mighty Genius</h2>)}
                    subhead={(<p style={{textAlign:'center'}}>For 5+ Year Olds</p>)}
                    list={(
                        <ul style={{listStyle:'none', textAlign:'left'}}> 
                            <li>Listen, Identify and Blend 26 Letter sounds</li>
                            <li>Master CVC and Sight words </li>
                            <li>Master Short and Long vowel</li>
                            <li>Master blends and digraphs</li>
                            <li>Letter Writing Practice </li>
                            <li>Independently read Simple Sentences</li>
                        </ul>
                            )}
                    classes={( <h4>40 Classes</h4>)}
                    classgroup={(<h5>Group Classes (Up to 4 per group)</h5>)}
                    classbudget={(
                        <div>
                        <p style={{textAlign:'center'}}>Package Cost – Rs. 7,000 </p>
                        <p style={{textAlign:'center'}}>Rs. 175/ class</p><br/>
                        <p style={{textAlign:'center'}}>* – 6 month subscription to Kutuki’s app free!</p>
                        </div>
                    )}
               />
              

            </div>

        </div>
    )
}

export default PackageSection
