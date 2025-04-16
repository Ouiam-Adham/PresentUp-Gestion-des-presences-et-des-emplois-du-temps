import React from 'react'
import SideBarFormateur from './SideBarFormateur'
import DisplayAbsence from './DisplayAbsence'
export default function FormateurAbsence() {
  return (
    <div className='content container-fluid d-flex min-vh-100 '>
        <SideBarFormateur/>
        <DisplayAbsence/>
    </div>
  )
}
