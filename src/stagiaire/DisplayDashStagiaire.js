import React from 'react'
import HeaderDash from '../formateur/HeaderDashFormateur'
import TopBar from './TopBar'
import Footer from '../home/Footer'
import AttendanceOverviewStagiaire from './AttendanceOverviewStagiaire'


export default function DisplayDashStagiaire() {
  return (
    <div className='display container-fluid '>
    <TopBar/>        
    <HeaderDash/> {/* Welcome Message: "Bonjour, [Trainer's Name]!"
Current Date & Time
Upcoming Class: */}
<AttendanceOverviewStagiaire/> 


      

   
<div className='footerdash'><Footer/></div>

        
    </div>
  )
}
