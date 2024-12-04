// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import BreadCrumps from "../components/BreadCrumps";
// import { Table } from "antd";

// function BookmarkedPrograms() {
//   const [bookmarkedPrograms, setBookmarkedPrograms] = useState([]);

//   useEffect(() => {
//     const fetchBookmarkedPrograms = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/api/universityRoutes/bookmarks", { withCredentials: true });
//         setBookmarkedPrograms(response.data);
//       } catch (error) {
//         console.error("Error fetching bookmarked programs:", error);
//       }
//     };

//     fetchBookmarkedPrograms();
//   }, []);

//   const columns = [
//     {
//       title: "Program Name",
//       dataIndex: "programs",
//       render: (text, record) => <Link to={`/program/${record._id}`}>{text[0].Program_Name}</Link>,
//     },
//     {
//       title: "Degree",
//       dataIndex: "programs",
//       render: (text, record) => text[0].degree_name,
//     },
//     // Add more columns as needed
//   ];

//   return (
//     <div className="container fluid">
//       <BreadCrumps page="ranking" title="Ranking" />
//       <h2>Your Bookmarked Programs</h2>
//       <Table
//         columns={columns}
//         dataSource={bookmarkedPrograms}
//         rowKey={(record) => record._id}
//         pagination={{ pageSize: 10 }}
//       />
//     </div>
//   );
// }

// export default BookmarkedPrograms;
