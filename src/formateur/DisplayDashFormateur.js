import React from 'react'
import HeaderDash from './HeaderDashFormateur'
import TopBar from './TopBar'
import Footer from '../home/Footer'
import AttendanceOverviewFormateur from '../stagiaire/AttendanceOverviewStagiaire'


export default function DisplayDashFormateur() {
  return (
    <div className='display container-fluid '>
    <TopBar/>        
    <HeaderDash/> {/* Welcome Message: "Bonjour, [Trainer's Name]!"
    Current Date & Time
    Upcoming Class: */}
    <AttendanceOverviewFormateur /> {/*  {/* Today's Attendance: 

    Total students marked as Present, Absent, or Late (displayed as a bar chart or pie chart).
    Shortcut to the attendance marking page.
    Recent Attendance Records:

    List of recently completed sessions with attendance percentages.
    Option to export or share reports. */}


      

   
<div className='footerdash'><Footer/></div>

        
    </div>
  )
}
