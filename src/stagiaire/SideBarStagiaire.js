import React from 'react'
import { Link } from 'react-router-dom';

export default function SideBarStagiaire() {
  return (
    <div className='sidebar'>
        <div className='presentup d-flex'>
          <img className="brand" src="/images/logofinal.png" alt="Logo" />
          <p className='presentup-para'>PresentUp</p>
        </div>
        <div>
            <ul className='sidebar-ul'>
                <li className='sideitem'><Link className=' ' to='/stagiairedash'><span><img className='icon-side' src='/images/icons8-dashboard-layout-48.png'></img></span><span className='pl-2'>Tableau de Bord</span></Link></li>
                <li className='sideitem'><Link to='/stagiaireabsence'>Record d'Absence personnel</Link></li>
                <li className='sideitem'><Link to='/stagiaireemploi'>Emploi du Temps Personnel</Link></li>
            </ul>
        </div>
    </div>
  )
}
