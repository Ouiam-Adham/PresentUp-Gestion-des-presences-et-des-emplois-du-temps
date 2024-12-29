// 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure Bootstrap JS is imported
import './Home.css';

export default function Home() {
  return (
    <div>
      <div className="container-fluid">
        <nav>
          <div className="top navbar navbar-expand-lg ">
            <div className='container-fluid'>
            <img  className='brand' src='/images/logo2.png'></img>

            <div className='dropdowns'  >
            

      
                  
              
                  <div  className="dropdown">
                    <button  className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Formateurs
                    </button>
                    <ul  className="dropdown-menu">
                        <li><button  className="dropdown-item" type="button">Feuille de Présence</button></li>
                        <li><button  className="dropdown-item" type="button">Horaires des Formateurs
                        </button></li>
                        <li><button  className="dropdown-item" type="button">Emploi du Temps par Groupe</button></li>
                    </ul>
                    </div>

                    <div  className="dropdown">
                    <button  className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Stagiaires
                    </button>
                    <ul  className="dropdown-menu">
                        <li><button  className="dropdown-item" type="button">Feuille de Présence</button></li>
                        <li><button  className="dropdown-item" type="button">Horaires des Formateurs
                        </button></li>
                        <li><button  className="dropdown-item" type="button">Emploi du Temps par Groupe</button></li>
                    </ul>
                    </div>

                    <div  className="dropdown">
                    <button  className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Admins
                    </button>
                    <ul  className="dropdown-menu">
                        <li><button  className="dropdown-item" type="button">Feuille de Présence</button></li>
                        <li><button  className="dropdown-item" type="button">Horaires des Formateurs
                        </button></li>
                        <li><button  className="dropdown-item" type="button">Emploi du Temps par Groupe</button></li>
                    </ul>
                    </div>
                    <button className='navbar-toggler-icon' type="button">
                    <span>//</span>

            </button>
            </div>

            

            </div>
          </div>

          <hr />

          <div className="bottom nav justify-content-end">
            <div>
              <a href="#" className="admintag">
                <img
                  src="/icons/admin3.png"
                  className="admin"
                  alt="admin icon"
                />
                <div>Admin</div>
              </a>
            </div>
          </div>
        </nav>

        <div className="main">
          <div className="cardimg">
            <div className="titre1">
              <h1>Formateur</h1>
            </div>
          </div>

          <div className="cardimg">
            <div className="titre1">
              <h1>Stagiaire</h1>
            </div>
          </div>
        </div>

        <footer className="footer navbar">
          <div className="ul footer">
            <a href="#">Contact</a>
            <a href="#">Mentions légales</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
