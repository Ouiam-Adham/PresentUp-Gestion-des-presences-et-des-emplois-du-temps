import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure Bootstrap JS is imported
import '../Home.css';
import ContentDashAdmin from '../admin/ContentDashAdmin';
import '../Formateurdash.css';

export default function AdminDash() {
  return (
      <div className="formateurdash container-fluid ">  

        <div className="main flex-fill">
         <ContentDashAdmin/>{/* sidebar +displayDash */}
        </div>

      </div>
  );
}
