import React from 'react'
import HeaderDash from './HeaderDashFormateur'
import TopBar from './TopBar'
import Footer from '../home/Footer'
import Absence from './Absence'


export default function DisplayAbsence() {
  return (
    <div className='display '>
    <TopBar/>        
    <HeaderDash/> {/* Welcome Message: "Bonjour, [Trainer's Name]!"
    Current Date & Time
    Upcoming Class: */}
    <Absence/>


      

   
<div className='footerdash'><Footer/></div>

        
    </div>
  )
}
