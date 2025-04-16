import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure Bootstrap JS is imported
import '../Home.css';
import HeaderHome from './HeaderHome';
import Footer from './Footer';
export default function Home() {
  return (
      <div className="home container-fluid d-flex flex-column min-vh-100 col-lg-12">
        <HeaderHome/>

        <div className="main flex-fill">
          <div className="bienvenue main">
            <p className="bienvenue top">
              Bienvenue sur <br />
              <p style={{fontFamily:'inherit', fontSize:'80px'}}>PresentUp,</p>
            </p>
            <p className="bienvenue bottom">
              La plateforme de suivi d'absence, de génération de statistiques et de consultation d'emploi du temps.
            </p>
          </div>
          
        </div>

        <Footer/>
      </div>
  );
}
