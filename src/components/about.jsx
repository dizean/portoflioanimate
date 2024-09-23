import React from 'react';
import './css/about.css'
function About(){
    return(
        <>
        <div className='about'>
        <div className='content'>
            <div className='left'>
            <img src='../assets/me1.png'/>
            </div>
            <div className='right'>
            <h1>About me</h1>
            <p>
            As a third-year BSIT student, I specialize in programming and database
             management. Proficient in Python, C++, C#, PHP, and Javascript, 
             I excel in solving coding challenges and crafting efficient algorithms.
              Beyond code, I delve into the captivating realms of web design and UI/UX,
               ensuring seamless integration of functionality and aesthetics. 
               My database expertise spans from relational structures to NoSQL 
               solutions, ensuring robust and scalable data architectures.
                Excited about the limitless possibilities in technology, 
                I'm committed to pushing boundaries and creating impactful solutions.
                 Let's connect and explore the exciting horizons of IT together!
            </p>
            </div>
        </div>
        </div>
        </>
        
    )
}
export default About;