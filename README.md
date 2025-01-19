# Abroad Study 🌍  

A web application to explore, compare, and analyze study programs from universities worldwide. Built using the **MERN Stack** with advanced web scraping tools like **BeautifulSoup** and **Selenium**, this project provides detailed program information in a user-friendly interface.  

---

## Table of Contents  
1. [Features](#features)  
2. [Technologies Used](#technologies-used)  
3. [Installation](#installation)  
4. [Web Scraping Workflow](#web-scraping-workflow)  
5. [API Endpoints](#api-endpoints)  
6. [Future Enhancements](#future-enhancements)  
7. [License](#license)  

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
   cd Abroad-Study/project/server  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Set up `.env` file:  
   ```env  
   MONGO_URI=your-mongodb-atlas-uri  
   JWT_SECRET=your-jwt-secret  
   PORT=5000  
   ```  

4. Start the server:  
   ```bash  
   npm start  
   ```  

### Frontend Setup  
1. Navigate to the client folder:  
   ```bash  
   cd ../client  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the client:  
   ```bash  
   npm start  
   ```  

---

## Web Scraping Workflow  

1. **Static Data**:  
   - Use Python and BeautifulSoup to scrape static data.  
   - Save data in JSON format for MongoDB insertion.  

2. **Dynamic Data**:  
   - Use Selenium to handle JavaScript-rendered pages.  
   - Automate data scraping for programs and university details.  

3. **Data Transfer**:  
   - Load JSON data into MongoDB Atlas.  
   - Ensure compatibility with defined Mongoose schemas.  

---

## API Endpoints  

### **Auth Routes**  
- `POST /api/register` - Register a new user.  
- `POST /api/login` - Login and retrieve JWT.  

### **University Routes**  
- `GET /api/universities` - Fetch all universities.  
- `POST /api/university` - Add a new university.  

---

## Future Enhancements  
- Real-time updates for university rankings.  
- Advanced filtering options like Ranking, budget, and program type, English Language Test score etc.  
- Visualization tools for data comparison and analysis.  

---

## License  
This project is licensed under the [MIT License](LICENSE).
