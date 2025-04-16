import React from 'react'
import DisplayDashStagiaire from './DisplayDashStagiaire';
import SideBarStagiaire from './SideBarStagiaire';

export default function ContentDash() {
  return (
    <div className='content container-fluid d-flex min-vh-100 '>
        <SideBarStagiaire/>
        <DisplayDashStagiaire/>

    </div>
  )
}
