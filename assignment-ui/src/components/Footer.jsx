import React from 'react'
import './Footer.css'
import Whatsapp from '../assests/whatsapp.png'

const Footer = () => {
    return (
        <>
            <div className='whatsapp'>
                <div className='text'>
                WhatsApp us to learn more 
                </div>
                <div className='icon'>
                <img src={Whatsapp} height='60' width='60' />
                </div>
            </div>
            <div className="main-footer">

                <div className="frow">
                    <div className="fcol">
                        Privacy Policy
                    </div>
                    <div className="fcol">
                        Terms of use
                    </div>
                </div>

                <div className="frow">
                    <div className="fcol">
                        &copy;Copyright @2020 | Soniqmantra Private Limited
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
