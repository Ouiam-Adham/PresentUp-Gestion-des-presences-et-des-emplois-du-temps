import React from 'react'
import { Link } from 'react-router-dom';

export default function SideBarAdmin() {
  return (
    <div className='sidebar'>
        <div className='presentup d-flex'>
          <img className="brand" src="/images/logofinal.png" alt="Logo" />
          <p className='presentup-para'>PresentUp</p>
        </div>
        <div>
            <ul className='sidebar-ul'>
                <li className='sideitem'><Link className='' to='/stagiairedash'><span><img className='icon-side ' src='/images/icons8-dashboard-layout-48.png'></img></span><span >Tableau de Bord</span></Link></li>
                <li className='sideitem'><Link to='/stagiaireabsence'>--</Link><span><img className='icon-side ' src='/images/icons8-timetable-48.png'></img></span><span >Feuille Absence</span></li>
                <li className='sideitem'><Link to='/stagiaireemploi'>--</Link></li>
            </ul>
        </div>
    </div>
  )
}
