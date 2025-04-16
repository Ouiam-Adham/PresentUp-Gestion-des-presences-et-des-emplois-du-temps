import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure Bootstrap JS is imported
import '../Home.css';
import ContentDashStagiaire from '../formateur/ContentDashFormateur';
import '../Formateurdash.css';

export default function StagiaireDash() {
  return (
      <div className="formateurdash container-fluid ">  

        <div className="main flex-fill">
         <ContentDashStagiaire/>{/* sidebar +displayDash */}
        </div>

      </div>
  );
}
