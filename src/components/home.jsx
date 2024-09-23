import React from 'react';
import './css/home.css'
import Typer from './typewrite';
function Home(){
    return(
        <>
        <div className='home'>
        <div className='content'>
            <h3>Hello, I am</h3>
            <h2>Charles Denver Ean Torres</h2>
            <h4>I am an aspiring <Typer/></h4>
        </div>
        </div>
        </>
        
    )
}
export default Home;