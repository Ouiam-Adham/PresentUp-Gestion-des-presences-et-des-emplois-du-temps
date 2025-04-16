import React from 'react'
import HeaderDash from '../admin/HeaderDashAdmin'
import TopBar from './TopBar'
import Footer from '../home/Footer'
import AttendanceOverviewAdmin from './AttendanceOverviewAdmin'


export default function DisplayDashAdmin() {
  return (
    <div className='display container-fluid '>
    <TopBar/>        
    <HeaderDash/> {/* Welcome Message: "Bonjour, [Trainer's Name]!"
Current Date & Time
Upcoming Class: */}
<AttendanceOverviewAdmin/> {/*  {/* Today's Attendance: 

Total students marked as Present, Absent, or Late (displayed as a bar chart or pie chart).
Shortcut to the attendance marking page.
Recent Attendance Records:

List of recently completed sessions with attendance percentages.
Option to export or share reports. */}


      

   
<div className='footerdash'><Footer/></div>

        
    </div>
  )
}
