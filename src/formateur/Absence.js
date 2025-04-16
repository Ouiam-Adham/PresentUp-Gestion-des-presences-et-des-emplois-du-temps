import { useState, useEffect } from "react";

export default function AbsenceTable() {
  const [trainees, setTrainees] = useState(['ahmed', 'ali', 'amine', 'salma']);

  useEffect(() => {
    fetch("/api/trainees")
      .then((response) => response.json())
      .then((data) => setTrainees(data.map(t => ({ ...t, status: null }))));
  }, []);

  const updateStatus = (id, status) => {
    fetch(`/api/trainees/${id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content,
      },
      body: JSON.stringify({ status }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTrainees((prev) =>
            prev.map((t) =>
              t.id === id ? { ...t, status: data.status } : t
            )
          );
        }
      });
  };

  return (
    <div className="absence container mt-1" style={{ marginLeft: "240px",width: "1210px", margin: "auto" }}>
      <table className="table table-bordered text-center p=absolute" >
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          {trainees.map((trainee) => (
            <tr key={trainee.id}>
              <td>{trainee.name}</td>
              <td>
                <button
                  className={`btn ${trainee.status === "present" ? "btn-success" : "btn-outline-success"}`}
                  onClick={() => updateStatus(trainee.id, "present")}
                >
                  {trainee.status === "present" ? "✔️" : ""}
                </button>
              </td>
              <td>
                <button
                  className={`btn ${trainee.status === "absent" ? "btn-danger" : "btn-outline-danger"}`}
                  onClick={() => updateStatus(trainee.id, "absent")}
                >
                  {trainee.status === "absent" ? "❌" : ""}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
