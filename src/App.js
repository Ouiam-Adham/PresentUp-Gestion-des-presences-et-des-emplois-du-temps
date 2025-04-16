import Home from "./home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FormateurDash from "./formateur/FormateurDash";
import StagiaireDash from "./stagiaire/StagiaireDash";
import FormateurAbscence from './formateur/FormateurAbsence';
import AdminDash from "./admin/AdminDash"
import FormsModule from "./auth/FormsModule";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route  path="/formateurdash" element={<FormateurDash/>}></Route>
      <Route  path="/stagiairedash" element={<StagiaireDash/>}></Route>
      <Route  path="/admindash" element={<AdminDash/>}></Route>
      <Route  path="/absence" element={<FormateurAbscence/>}></Route>
      <Route  path="/form" element={<FormsModule/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
