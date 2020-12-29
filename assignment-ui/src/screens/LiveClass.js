import React from 'react'
import Phonics from '../assests/phonics.png'
import Maths from '../assests/maths.png'
import CardDisplay from '../components/CardDisplay'


const LiveClass = () => {
    return (
        <>
           <CardDisplay 
           image={Phonics}
           id={0}
           head={"Phonics"}
           para1={"Speaking, Reading and Writing are among the most important fundamental skills a child can acquire."}
           para2={"Mastering Phonics is crucial for your little one to become a better reader,speak fluently and build a strong foundation overall"}    
           />
           
           <CardDisplay 
           id={1}
           image={Maths}
           head={"Maths"}
           para1={"Building early number sense is extremely critical for young children to become confident learners overall. "}
           para2={"Our program is designed to impart the necessary tools for your child to make sense of and organize the world around them."}    
           />

        </>
    )
}

export default LiveClass
