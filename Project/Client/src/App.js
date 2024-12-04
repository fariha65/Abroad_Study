import { UserProvider } from "./context/AppContext"; // Import the context provider
import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Universities from "./pages/Universities";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Ranking from "./pages/Ranking";
import Program from "./pages/Program";
import Bookmarkes from "./pages/Bookmarkes";
import ForgotPassword from "./pages/ForgotPassword";
import SearchDetails from "./pages/SearchDetails";
import StudentProfile from "./pages/StudentProfile";
import ProgramDetails from "./pages/ProgramDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "antd/dist/reset.css";


function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/universities" element={<Universities />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/searchdetails" element={<SearchDetails />} />
                        <Route path="/ranking" element={<Ranking />} />
                        <Route path="/studentprofile" element={<StudentProfile />} />
                        <Route path="/Bookmarkes" element={<Bookmarkes/>} />
                        <Route path="/program/:id" element={<ProgramDetails />} />
                        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
                        <Route path="/program" element={<Program />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
