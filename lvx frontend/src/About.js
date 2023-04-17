import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import lvx from './Images/lvx.jpg'
import './about.css'

function About() {
  return (
    <>
    <Navbar/>
    <div className='aboutpage'>
    <img src={lvx} alt="lvx"/>
    <div className='aboutbox'>
      <div className='abouttext'>
        Lvx is a classified website for LPU students, 
        our motive is to make the selling process easier for students who want 
        to sell second-hand products or the products which they aren't going 
        to use. 
        <br></br><br></br>
        This Capstone Project was created by Nihit Yadav.
        <br></br>
        Github link:- <a href='https://github.com/NihitYadav' className='github'>https://github.com/NihitYadav</a>
      </div>
    </div>
    </div>
    </>
  )
}

export default About