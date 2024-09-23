import React from "react";
import './css/skills.css'
function Resume(){
    return(
        <>
        <div className="resume">
            <div className="rescont">
            <div className="links">
        <h1>Resume</h1>
        <a href="#educ">Education</a>
        <a href="#skill">Skills</a>
        <a href="#exp">Experience</a>
        </div>
        <div className="tolinks">
        <div id="educ">
        <h1>Education</h1>
        <p>
        <h2>College</h2><br/>
        - Bachelor of Science in Information Technology<br/>
        - La Consolacion College Bacolod<br/>
        - Ongoing, Expected Graduation: [Month Year]<br/><br/>

        <h2>Senior High School</h2><br/>
        - Science, Technology, Engineering, and Mathematics strand<br/>
        - Colegio de Santo Tomas de Recoletos<br/>
        - Graduated: 2021<br/><br/>

        <h2>High School</h2><br/>
        - Colegio de Santo Tomas de Recoletos<br/>
        - Graduated: 2019<br/><br/>

        <h2>Elementary</h2><br/>
        - Andres Bonifacio Central School<br/>
        - Graduated: 2015<br/><br/>
        </p>

                </div>
                <div id="skill">
                <h1>Skills</h1>
                <p>
        <h2> Programming Languages</h2><br/>
        - Java<br/>
        - JavaScript<br/>
        - PHP<br/>
        - Python<br/>
        - C++<br/>
        - C#<br/><br/>

        <h2> Web Technologies</h2><br/>
        - HTML<br/>
        - CSS<br/><br/>

        <h2>Software Development </h2><br/>
        - Familiar with MS Office Suite<br/><br/>

        <h2>Design Tools</h2><br/>
        - Figma<br/>
        - Canva<br/><br/>
        </p>
                </div>
                <div id="exp">
                <h1>Experience</h1>
                <p>
                <h2>
            Philippines Startup Challenge 2023
            </h2>
        - Qualification Participant<br/>
        - Year: 2023<br/><br/>

        Successfully qualified as a participant in 
        the prestigious Philippines Startup
         Challenge 2023, showcasing skills 
         in innovation, problem-solving, and 
         entrepreneurial spirit. Engaged in a
          dynamic environment, collaborating with 
          diverse teams to develop and present a
           compelling startup concept.<br/>

</p>
        </div>
        </div>
            </div>
        </div>
        </>
    )
}
export default Resume;