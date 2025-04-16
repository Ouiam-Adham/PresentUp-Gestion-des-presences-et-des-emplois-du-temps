import React from 'react'

export default function HeaderDashAdmin() {
  return (
      <div className='headerdash d-flex justify-content-around '>
        <p className='welcome'>
          Bonjour, ... !{/* ---! */}
        </p>
        <p className='time'>
          {new Date().toLocaleString()}
        </p>
        <p className='seance'>
          Total Absences pour le Jour : --{/*---*/}
        </p>
      </div>
  )
}
