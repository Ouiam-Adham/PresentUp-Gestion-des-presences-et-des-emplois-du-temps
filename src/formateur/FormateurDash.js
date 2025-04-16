import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure Bootstrap JS is imported
import '../Home.css';
import ContentDashFormateur from './ContentDashFormateur';
import '../Formateurdash.css';
export default function FormateurDash() {
  return (
      <div className="formateurdash container-fluid ">  

        <div className="main flex-fill">
         <ContentDashFormateur/>{/* sidebar +displayDash */}
        </div>

      </div>
  );
}
