import { useState } from "react";
import "./styles.css"; // Custom CSS for additional styling

const FormFormateur = () => (
  <form className="d-flex flex-column gap-3 w-100">
    <div className="input-group">
      <label>Email</label> <input type="email" placeholder="Email" className="form-control w-100 custom-input"  />
    </div>
    <div className="input-group">
      <label>Mot de pass </label><input type="password" placeholder="Password" className="form-control w-100 custom-input" />
    </div>
    <button type="submit" className="form-button btn w-100">Submit</button>
  </form>
);

const FormStagiaire= () => (
  <form className="d-flex flex-column gap-3 w-100">
  <div className="input-group">
    <label>Email</label> <input type="email" placeholder="Email" className="form-control w-100 custom-input" />
  </div>
  <div className="input-group">
    <label>Mot de pass </label><input type="password" placeholder="Password" className="form-control w-100 custom-input" />
  </div>
  <button type="submit" className="form-button btn  w-100">Submit</button>
</form>
);

const FormAdmin = () => (
  <form className="d-flex flex-column gap-3 w-100">
  <div className="input-group">
    <label>Email</label> <input type="email" placeholder="Email" className="form-control w-100 custom-input"  />
  </div>
  <div className="input-group">
    <label>Mot de pass </label><input type="password" placeholder="Password" className="form-control w-100 custom-input" />
  </div>
  <button type="submit" className="form-button btn w-100">Submit</button>
</form>
);

export default function FormsModule() {
  const [activeTab, setActiveTab] = useState(0);
  const forms = [<FormFormateur />, <FormStagiaire />, <FormAdmin />];

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-lg form-container">
        
        {/* Tabs Navigation */}
        <ul className="nav custom-nav-tabs">
  {["Formateur", "Stagiaire", "Admin"].map((label, index) => (
    <li className="nav-item" key={index}>
      <a
        href="#"
        className={`nav-link ${activeTab === index ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setActiveTab(index);
        }}
      >
        {label}
      </a>
    </li>
  ))}
</ul>


        {/* Form Content */}
        <div className="form-content">{forms[activeTab]}</div>
      </div>
    </div>
  );
}
