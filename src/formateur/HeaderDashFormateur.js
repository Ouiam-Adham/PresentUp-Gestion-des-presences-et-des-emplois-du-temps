import React from 'react'

export default function HeaderDash() {
  return (
      <div className='headerdash d-flex justify-content-around '>
        <p className='welcome'>
          Bonjour, {/* {Formateur.nom}! */}
        </p>
        <p className='time'>
          {new Date().toLocaleString()}
        </p>
        <p className='seance'>
          Prochaine séance: {/* {Formateur.seance} */}
        </p>
      </div>
  )
}
