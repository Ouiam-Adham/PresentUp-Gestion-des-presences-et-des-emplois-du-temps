import { useState } from "react";

function Form() {
  const [activeForm, setActiveForm] = useState("form1"); // Default to first form

  return (
    <div className="container">
      {/* Titles to Switch Forms */}
      <div className="tabs">
        <button onClick={() => setActiveForm("form1")}>Form 1</button>
        <button onClick={() => setActiveForm("form2")}>Form 2</button>
        <button onClick={() => setActiveForm("form3")}>Form 3</button>
      </div>

      {/* Forms */}
      <div className="form-content">
        {activeForm === "form1" && <Form1 />}
        {activeForm === "form2" && <Form2 />}
        {activeForm === "form3" && <Form3 />}
      </div>
    </div>
  );
}

function Form1() {
  return (
    <form>
      <h3>Form 1</h3>
      <input type="text" placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  );
}

function Form2() {
  return (
    <form>
      <h3>Form 2</h3>
      <input type="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

function Form3() {
  return (
    <form>
      <h3>Form 3</h3>
      <input type="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
