import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BreadCrumps from "../components/BreadCrumps";
import { UserContext } from '../context/AppContext'; // Import UserContext

const SearchDetails = () => {
  const [state] = useContext(UserContext); // Use UserContext to get state
  const { token } = state; // Destructure token from state
  const isAuthenticated = !!token; // Check authentication status

  const [formData, setFormData] = useState({
    livecountry: "",
    country: "",
    year: "",
    level: "",
  });

  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleViewResults = () => {
    if (isAuthenticated) {
      navigate('/StudentProfile'); // Navigate to results if authenticated
    } else {
      alert("Please log in to view results!"); // Alert if not authenticated
      navigate('/login'); // Navigate to login page
    }
  };

  return (
    <div className="container fluid">
      {/* Breadcrumb */}
      <BreadCrumps page="SearchDetails" title="SearchDetails" />

      <div className="row py-5 text-light bg-default1-image">
        <div className="col text-center">
          <h1>SHORT SEARCH</h1>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#c3c7f3",
          gap: "10px",
          padding: "30px",
          border: "1px solid #cac",
          borderRadius: "1px",
          width: "530px",
          margin: "50px auto",
        }}
      >

        {/* Country to Study Dropdown */}
        <label style={{ width: "100%" }}>
          Which Country do you want to study?
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={{
              padding: "8px",
              width: "100%",
              margin: "5px 0",
              borderRadius: "4px",
            }}
          >
            <option value="Australia">Australia</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </label>

        {/* Study Start Year Dropdown */}
        <label style={{ width: "100%" }}>
          Study Start Year 
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            style={{
              padding: "8px",
              width: "100%",
              margin: "5px 0",
              borderRadius: "4px",
            }}
          >
            <option value="Fall 2025">Fall 2025</option>
            <option value="Spring 2025">Spring 2025</option>
            <option value="Fall 2024">Fall 2024</option>
            <option value="Later">Later</option>
          </select>
        </label>

        {/* Study Level Dropdown */}
        <label style={{ width: "100%" }}>
          Degree Type
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            style={{
              padding: "8px",
              width: "100%",
              margin: "5px 0",
              borderRadius: "4px",
            }}
          >
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
        </label>

        {/* View Results Button */}
        <button
          type="button"
          onClick={handleViewResults}
          style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          View Results
        </button>
      </form>
    </div>
  );
};

export default SearchDetails;
