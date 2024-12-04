import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import BreadCrumps from "../components/BreadCrumps";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AppContext"; // Import UserContext

const ProgramDetails = () => {
  const { id } = useParams(); // Get the program ID from the URL
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [state] = useContext(UserContext); // Use context to get user and token
  const isLoggedIn = Boolean(state.token); // Check if logged in using token from context

  useEffect(() => {
    // Redirect to login if not logged in
    if (!isLoggedIn) {
      alert("You need to be logged in to view program details.");
      navigate("/login");
      return; // Exit early
    }

    const fetchProgramDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/universityRoutes/${id}`);
        console.log(response.data); // Log the response to check the structure
        setProgram(response.data);
      } catch (err) {
        setError("Error fetching program details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProgramDetails();
  }, [id, isLoggedIn, navigate]); // Add isLoggedIn and navigate to dependency array

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!program || !program.programs || program.programs.length === 0) {
    return <div>No program details available</div>;
  }

  // Simplify access to program details
  const programDetails = program.programs[0];

  // Recursive function to render nested data
  const renderData = (data) => {
    if (typeof data === "object" && data !== null) {
      if (Array.isArray(data)) {
        return (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{renderData(item)}</li>
            ))}
          </ul>
        );
      } else {
        return (
          <ul>
            {Object.entries(data).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {renderData(value)}
              </li>
            ))}
          </ul>
        );
      }
    } else {
      return <span>{data !== undefined ? data : "N/A"}</span>;
    }
  };

  return (
    <div className="container fluid">
      <BreadCrumps page="programdetails" title="Program Details" />
      <h2>{programDetails.Program_Name || "Program Details"}</h2>
      <p><strong>Program ID:</strong> {programDetails._id}</p>

      <h3>All Details</h3>
      {renderData(programDetails)}
    </div>
  );
};

export default ProgramDetails;
