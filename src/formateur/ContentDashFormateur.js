import React from 'react'
import DisplayDashFormateur from '../stagiaire/DisplayDashStagiaire';
import SideBarFormateur from './SideBarFormateur';
export default function ContentDashFormateur() {
  return (
    <div className='content container-fluid d-flex min-vh-100 '>
        <SideBarFormateur/>
        <DisplayDashFormateur/>
    </div>
  )
}
