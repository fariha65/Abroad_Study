# Abroad Study 🌍  

A web application to explore, compare, and analyze study programs from universities worldwide. Built using the **MERN Stack** with advanced web scraping tools like **BeautifulSoup** and **Selenium**, this project provides detailed program information in a user-friendly interface.

---

## Table of Contents  
1. [Features](#features)  
2. [Technologies Used](#technologies-used)  
3. [Installation](#installation)  
4. [Web Scraping Workflow](#web-scraping-workflow)  
5. [File Structure](#file-structure)  
6. [API Endpoints](#api-endpoints)  
7. [Future Enhancements](#future-enhancements)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## Features  

### 🎓 University Program Features  
- Detailed university and program information displayed in interactive data tables.  
- Program comparison tool for side-by-side analysis.  
- University cards for easy navigation and quick details.  

### 🌐 Web Scraping  
- Static data extraction using **BeautifulSoup**.  
- Dynamic data scraping using **Selenium** for JavaScript-rendered pages.  

### 💻 Backend  
- **Node.js** API for handling university data.  
- Cloud database using **MongoDB Atlas**.  
- Secure data management with custom schemas.  

### 🔒 Authentication  
- User registration and login using **JWT**.  
- Password hashing with **bcrypt** for security.  

### 🌟 Frontend  
- Responsive React UI with **Ant Design** for styling and interactivity.  
- DataTables integration for sorting, filtering, and pagination.  

---

## Technologies Used  
- **Frontend**: React, Ant Design, DataTables  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB Atlas  
- **Web Scraping**: Python (BeautifulSoup, Selenium)  

---

## Installation  

### Prerequisites  
- Node.js  
- MongoDB Atlas account  
- Python environment with BeautifulSoup and Selenium  

### Backend Setup  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/fariha65/Abroad-Study.git  
   cd Abroad-Study/project/server  

### Install dependencies:
npm install  

### Set up .env file:
MONGO_URI=your-mongodb-atlas-uri  
JWT_SECRET=your-jwt-secret  
PORT=5000  

### Start the server:
npm start  

### Frontend Setup:
-**Navigate to the client folder:
cd ../client  
### Install dependencies:
npm install  
### Start the client:
npm start  

### Web Scraping Workflow
Static Data:

Use Python and BeautifulSoup to scrape static data.
Save data in JSON format for MongoDB insertion.
Dynamic Data:

Use Selenium to handle JavaScript-rendered pages.
Automate data scraping for programs and university details.
Data Transfer:

Load JSON data into MongoDB Atlas.
Ensure compatibility with defined Mongoose schemas.

### API Endpoints
Auth Routes
POST /api/register - Register a new user.
POST /api/login - Login and retrieve JWT.
University Routes
GET /api/universities - Fetch all universities.
POST /api/university - Add a new university.

### Future Enhancements
Real-time updates for university rankings.
Advanced filtering options like location, budget, and program type.
Visualization tools for data comparison and analysis.

### License
This project is licensed under the MIT License.
