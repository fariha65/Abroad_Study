// Path: D:/front/src/pages/RankingPage.jsx

import React, { useEffect } from 'react';
import BreadCrumps from "../components/BreadCrumps";
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css'; // DataTables CSS
import 'datatables.net-responsive-dt/css/responsive.dataTables.css'; // Responsive DataTables CSS
import 'datatables.net'; // DataTables JS
import 'datatables.net-responsive'; // Responsive DataTables

const Ranking = () => {

  useEffect(() => {
    // Initialize DataTable
    const table = $('#rankingTable').DataTable({
      responsive: true,
      paging: true,
      searching: true,
      destroy: true, // Allow reinitialization by destroying previous instances
      order: [[0, 'asc']], // Sort by ranking column (0-indexed)
    });

    // Cleanup function to destroy the table when the component unmounts
    return () => {
      table.destroy();
    };
  }, []);

  // Example Data (Replace this with your actual ranking data)
  const data = [
    { rank: 38, university: 'University of British Columbia', score: 81, location: 'Vancouver', state: 'British Columbia', country: 'Canada', website: 'https://www.ubc.ca/' },
    { rank: '661-670', university: 'University of Manitoba', score: "N/A", location: 'Winnipeg', state: 'Manitoba', country: 'Canada', website: 'https://umanitoba.ca/' },
    // Add more data here
  ];

  // Inline CSS styles
  const styles = {
    pageContainer: {
      padding: '20px',
      backgroundColor: '#fff',
      fontFamily: "'Arial', sans-serif",
    },
    tableContainer: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      marginTop: '20px',
    },
    table: {
      width: '100%',
      textAlign: 'center',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#C8A',
      color: 'white',
      padding: '12px',
      textTransform: 'uppercase',
      fontSize: '14px',
    },
    td: {
      padding: '12px',
      fontSize: '14px',
      borderBottom: '1px solid #ddd',
    },
    tableHeader: {
      backgroundColor: '#fff',
      textAlign: 'center',
      padding: '10px',
      borderRadius: '5px 5px 0 0',
    },
  };

  return (
    <section className="container fluid" id="contact">
      <div>
        {/* Breadcrumb */}
        <BreadCrumps page="ranking" title="Ranking" />

        <div style={styles.tableContainer}>
          <h2 style={styles.tableHeader}>Top Ranking</h2>
          <table id="rankingTable" className="display responsive nowrap" style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Rank</th>
                <th style={styles.th}>University</th>
                <th style={styles.th}>Score</th>
                <th style={styles.th}>Location</th>
                <th style={styles.th}>State</th>
                <th style={styles.th}>Country</th>
                <th style={styles.th}>Website</th>
              </tr>
            </thead>
            <tbody>
              {data.map((university, index) => (
                <tr key={index}>
                  <td style={styles.td}>{university.rank}</td>
                  <td style={styles.td}>{university.university}</td>
                  <td style={styles.td}>{university.score}</td>
                  <td style={styles.td}>{university.location}</td>
                  <td style={styles.td}>{university.state}</td>
                  <td style={styles.td}>{university.country}</td>
                  <td style={styles.td}><a href={university.website} target="_blank" rel="noopener noreferrer">{university.website}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
