import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <div>
        <div className='container-fluid'>
            <header className=''>

                <div className='top nav justify-content-between'> 
       
                    <span className='navbar-brand '>Presentable</span>
            
                    <div className=''>
                        <a href='#'>Services</a>
                    </div>
                </div>
                <hr />
                <div className='bottom nav justify-content-end'>
                    <div>
                        <a href='#' className='admintag'>
                            <img  src='/icons/admin3.png' className='admin' alt='admin icon' ></img>
                            <div>Admin</div>
                        </a>
                    </div>
                </div>

            </header>
            <div className='main'>

                    
                    

            </div>
     
            <footer className='footer navbar'>
                
                <div className='ul footer'>
                <a href='#'>Contact</a>
                <a href='#'>Mentions legales</a>
                </div>
            </footer>
        </div>
    </div>
  )
}
