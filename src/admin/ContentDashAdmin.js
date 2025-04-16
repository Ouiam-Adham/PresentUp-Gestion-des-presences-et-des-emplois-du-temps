import React from 'react'
import DisplayDashAdmin from './DisplayDashAdmin';
import SideBarAdmin from '../admin/SideBarAdmin';

export default function ContentDash() {
  return (
    <div className='content container-fluid d-flex min-vh-100 '>
        <SideBarAdmin/>
        <DisplayDashAdmin/>

    </div>
  )
}
