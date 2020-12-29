import React from 'react'
import LiveDetail from '../components/LiveDetail'
import Phonic from '../assests/phonics.png'

const Phonics = () => {
    return (
        <div>
            <LiveDetail
                image={Phonic}
                head={"Introducing Live Phonics Classes"}
                para1={"Speaking, Reading and Writing are among the most important fundamental skills a child can acquire."}
                para2={"We’re excited to launch our Phonics based program with live interactive classes with highly qualified teachers, and featuring examples from your child’s favourite Kutuki stories and rhymes."}    
                phead={"Kutuki's Phonics Program"}            
                ptext={"Mastering Phonics is crucial for your little one to become a better"+
                         " reader, speak fluently and build a strong foundation overall."}
            />
        </div>
    )
}

export default Phonics
