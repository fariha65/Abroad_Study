// src/pages/Program.jsx
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/AppContext"; // Import UserContext from AppContext
import { Link, useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import BreadCrumps from "../components/BreadCrumps";
import { Table, Button, Spin, Checkbox, Modal } from "antd";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

function UniProgram() {
  const [university, setUniversity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bookmarkedPrograms, setBookmarkedPrograms] = useState(
    JSON.parse(localStorage.getItem("bookmarkedPrograms")) || []
  );

  const navigate = useNavigate();
  const [state, setState] = useContext(UserContext); // Use context to get user and token
  const isLoggedIn = Boolean(state.token); // Check if logged in using token from context

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/universityRoutes");
        setUniversity(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("bookmarkedPrograms", JSON.stringify(bookmarkedPrograms));
    }
  }, [bookmarkedPrograms, isLoggedIn]);

  const handleSelectProgram = (record) => {
    if (!isLoggedIn) {
      alert("You need to be logged in to compare programs.");
      navigate("/login");
      return;
    }

    const isSelected = selectedPrograms.includes(record._id);
    const updatedSelection = isSelected
      ? selectedPrograms.filter((id) => id !== record._id)
      : [...selectedPrograms, record._id];

    if (updatedSelection.length <= 4) {
      setSelectedPrograms(updatedSelection);
    } else {
      alert("You can only compare up to 4 programs.");
    }
  };

  const handleBookmarkToggle = (record) => {
    if (!isLoggedIn) {
      alert("You need to be logged in to bookmark programs.");
      navigate("/login");
      return;
    }

    const isBookmarked = bookmarkedPrograms.includes(record._id);
    const updatedBookmarks = isBookmarked
      ? bookmarkedPrograms.filter((id) => id !== record._id)
      : [...bookmarkedPrograms, record._id];
    setBookmarkedPrograms(updatedBookmarks);
  };

  const handleCompare = () => {
    if (!isLoggedIn) {
      alert("You need to be logged in to compare programs.");
      navigate("/login");
      return;
    }
    setIsModalVisible(true);
  };

  const columns = [
    {
      dataIndex: "select",
      key: "select",
      render: (_, record) => (
        <Checkbox
          checked={selectedPrograms.includes(record._id)}
          onChange={() => handleSelectProgram(record)}
        />
      ),
    },
    {
      title: "Program Name",
      dataIndex: ["programs", 0, "Program_Name"],
      key: "Program_Name",
      render: (text, record) => (
        <Link to={`/program/${record._id}`}>{text}</Link>
      ),
    },
    {
      title: "Degree",
      dataIndex: ["programs", 0, "degree_name"],
      key: "degree_name",
    },
    {
      title: "Faculty",
      dataIndex: ["programs", 0, "faculty_name"],
      key: "faculty_name",
    },
    {
      title: "Tuition Fees",
      dataIndex: ["programs", 0, "program_details", "Tuition_Fees"],
      key: "Tuition_Fees",
      render: (fee) => (fee ? `${fee}` : "N/A"),
    },
    {
      title: "IELTS Overall Score Requirement",
      dataIndex: ["programs", 0, "test_scores", "ielts_overall_score_requirement"],
      key: "duration",
    },
    {
      title: "TOEFL Overall Score Requirement",
      dataIndex: ["programs", 0, "test_scores", "toefl_overall_score_requirement"],
      key: "toefl_overall_score_requirement",
    },
    {
      title: "Bookmark",
      dataIndex: "bookmark",
      key: "bookmark",
      render: (_, record) => (
        <span onClick={() => handleBookmarkToggle(record)}>
          {bookmarkedPrograms.includes(record._id) ? <FaBookmark /> : <FaRegBookmark />}
        </span>
      ),
    },
  ];

  const comparisonAttributes = [
    { title: "Program Name", dataIndex: "Program_Name" },
    { title: "Degree", dataIndex: "degree_name" },
    { title: "Faculty", dataIndex: "faculty_name" },
    { title: "Duration", dataIndex: "Duration", path: ["program_details", "Duration"] },
    { title: "Tuition Fees", dataIndex: "Tuition_Fees", path: ["program_details", "Tuition_Fees"] },
    { 
      title: "IELTS Overall Score Requirement", 
      dataIndex: "ielts_overall_score_requirement", 
      path: ["test_scores", "ielts_overall_score_requirement"] 
    },
    
    { 
      title: "TOEFL Overall Score Requirement", 
      dataIndex: "toefl_overall_score_requirement", 
      path: ["test_scores", "toefl_overall_score_requirement"] 
    },
   
    { title: "GRE Requirement", dataIndex: "gre_requirement", path: ["test_scores", "gre_requirement"] },
    { title: "Application Open Date", dataIndex: "application_open_date", path: ["intakes", "September_2025", "application_open", "date"] },
    { title: "Canadian Application Deadline", dataIndex: "canadian_application_deadline", path: ["intakes", "September_2025", "canadian", "Application Deadline:"] },
    { title: "International Application Deadline", dataIndex: "international_application_deadline", path: ["intakes", "September_2025", "international", "Application Deadline:"] },
    { title: "Domestic Tuition Fees Per Year", dataIndex: "Domestic_Tuition_Fees_per_year", path: ["tuition_info", "Tuition_Per_Year", "Domestic"] },
    { title: "International Tuition Fees Per Year", dataIndex: "International_Tuition_Fees_per_year", path: ["tuition_info", "Tuition_Per_Year", "International"] },
    { title: "Program Website", dataIndex: "prog_website_url", path: ["further_info", "prog_website", "url"] },
  ];
  

  const comparisonData = selectedPrograms.map((id) => university.find((item) => item._id === id));

  const comparisonRows = comparisonAttributes.map((attribute) => ({
    key: attribute.title,
    title: attribute.title,
    ...Object.fromEntries(
      comparisonData.map((program, index) => [
        `program${index + 1}`,
        program
          ? attribute.path
            ? attribute.path.reduce((acc, cur) => acc && acc[cur], program.programs[0]) || "N/A"
            : program.programs[0][attribute.dataIndex]
          : "N/A",
      ])
    ),
  }));

  const modalColumns = [
    { title: "", dataIndex: "title", key: "title" },
    ...comparisonData.map((_, index) => ({
      title: `Program ${index + 1}`,
      dataIndex: `program${index + 1}`,
      key: `program${index + 1}`,
    })),
  ];

  return (
    <div className="container fluid">
      <BreadCrumps page="Programs" title="Programs" />
      <h2>University Program List</h2>
      {loading ? (
        <Spin size="large" style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <>
          <Button
            type="btn btn-primary"
            disabled={selectedPrograms.length < 2}
            onClick={handleCompare}
            style={{ marginBottom: "20px" }}
          >
            Compare Selected Programs
          </Button>
          <Table
            columns={columns}
            dataSource={university}
            rowKey={(record) => record._id}
            pagination={{ pageSize: 10 }}
          />
        </>
      )}

      <Modal
        title="Program Comparison"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
      >
        <Table
          columns={modalColumns}
          dataSource={comparisonRows}
          pagination={false}
          rowKey="key"
        />
      </Modal>
    </div>
  );
}

export default UniProgram;
