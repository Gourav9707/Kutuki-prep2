import React from 'react'
import LiveDetail from '../components/LiveDetail'
import Math from '../assests/maths.png'

const Maths = () => {
    return (
        <div>
            <LiveDetail
                image={Math}
                head={"Introducing Early Maths Classes"}
                para1={"We’re excited to launch our Early Maths program with live interactive classes with highly qualified teachers, and featuring examples from your child’s favourite Kutuki stories and rhymes"}
                para2={""}    
                phead={"Kutuki's Early Maths Program"}            
                ptext={"Building early number sense is extremely critical for young children to become confident learners overall. Our program is designed to impart the necessary tools for your child to make sense of and organize the world around them."}
            />
        </div>
    )
}

export default Maths
