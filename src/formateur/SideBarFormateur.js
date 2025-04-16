import React from 'react'
import { Link } from 'react-router-dom';

export default function SideBarFormateur() {
  return (
    <div className='sidebar'>
        <div className='presentup d-flex'>
          <img className="brand" src="/images/logofinal.png" alt="Logo" />
          <p className='presentup-para'>PresentUp</p>
        </div>
        
            <ul className='sidebar-ul'>
                <li ><Link className='sideitem  ' to='/formateurdash'><span ><img className='icon-side ' src='/images/icons8-dashboard-layout-48.png'></img></span><span className='pl-2'>Tableau de Bord</span></Link></li>
                <li ><Link className='sideitem' to='/absence'><span><img className='icon-side ' src='/images/icons8-timetable-48.png'></img></span><span >Feuille d'Appel</span></Link></li>
                <li ><Link className='sideitem' to='/formateuremploi'><span><img className='icon-side ' src='/images/icons8-dashboard-layout-24.png'></img></span><span >Emploi du Temps Personnel</span></Link></li>
                <li ><Link className='sideitem' to='/formateuremploigroup'><span><img className='icon-side ' src='/images/icons8-dashboard-layout-24.png'></img></span><span >Emploi du Temps par Group</span></Link></li>
            </ul>
        
    </div>
  )
}
