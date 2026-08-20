import React, { useState, useEffect } from "react";
import axios from "axios";

function DoctorsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/doctors")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Our Doctors</h2>
      {data.map((doc, index) => (
        <div key={index}>
          <p><strong>{doc.name}</strong> - {doc.specialisation}</p>
          <p>Available: {doc.available ? "Yes" : "No"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default DoctorsPage;