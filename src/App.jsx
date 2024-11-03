import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './Profile.css'

function App() {
  

  return (

  <html>
    <body class="img">
      <div>
       <div>
        <div>
            <img src="./button5.jpg" alt="my image" width="200px" height="150px" class="myimg"></img>
        </div>
        <div>
          <p class="intro"><b>Hi there,</b></p>
          <p class="para2">This is</p>
          <p class="para2"><b>JAYA REDDY GARI DHANUNJAYA REDDY</b></p>
          <p class="intro"><b>This is the page where you can find about me</b></p>
        </div>

        <div class="display">
            <div class="sector">
                <span class="inside">My name is JAYA REDDY GARI DHANUNJAYA REDDY<br></br>
                  I was born on 4th September 2006<br></br>
                  I live in the city of KURNOOL in ANDHRA PRADESH</span>
                <span>About Me</span>
            </div>
        
        <div class="sector">
            <span class="inside">I completed my class 10 from MONTESSORI E.M HIGH SCHOOL<br></br>
                I completed my class 12 from TURITO JUNIOR COLLEGE<br></br>
                I am graduating from IIT DHANBAD in computer science</span>
            <span>Education</span>
        </div>
        
        <div class="sector">
            <span class="inside">HTML<br></br>CSS<br></br>COMPUTER PROGRAMMING</span>
            <span>Skills</span>
        </div>
        
        <div class="sector">
            <span class="inside">MY PROFILE PAGE</span>
            <span>Projects</span>
        </div>
        <div class="sector">
            <span class="inside">Email:<br></br>
                Phone number:<br></br>
                Linkedin:<br></br>
                Github:<br></br></span>
                <span>Contact info</span>
        </div>
      </div>
    </div>
    </div>
    </body>
  </html>


   
  )
}

export default App
