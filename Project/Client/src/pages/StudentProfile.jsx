import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios to make API calls
import {
  Button,
  Form,
  Input,
  Upload,
  Card,
  Divider,
  Row,
  Col,
  Avatar,
  Tag,
  List,
  DatePicker,
  Select,
  InputNumber,
  Slider,
} from "antd"; // Import the required components
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BreadCrumps from "../components/BreadCrumps";

function UserProfile() {
  const [form] = Form.useForm();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [bookmarkedPrograms, setBookmarkedPrograms] = useState([]);
  const [university, setUniversity] = useState([]); // Assuming you have access to the university data

  // Load saved preferences and bookmarks from local storage when component mounts
  useEffect(() => {
    // Load bookmarked programs from localStorage
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarkedPrograms")) || [];
    setBookmarkedPrograms(storedBookmarks);
  }, []);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/universityRoutes");
        const data = await response.json();
        setUniversity(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUniversities();
  }, []);

  const bookmarkedUniversityPrograms = university.filter((program) =>
    bookmarkedPrograms.includes(program._id)
  );

  // Handle image upload and store image URL
  const handleImageUpload = (info) => {
    if (info.file.status === "done") {
      const imageUrl = URL.createObjectURL(info.file.originFileObj);
      setUploadedImage(imageUrl);
    }
  };

  // Handle form submission
  const handleFormSubmit = (values) => {
    console.log("Submitted Profile:", values);
    localStorage.setItem("userPreferences", JSON.stringify(values));
  };

  return (
    <div className="container-fluid" style={{ maxWidth: 900, margin: "auto" }}>
      <BreadCrumps page="studentprofile" title="Profile" />
      <Card style={{ marginTop: 24 }} bordered={true} headStyle={{ backgroundColor: "#f0f2f5" }}>
        <Row gutter={24}>
          {/* Profile Picture and Bookmarked Programs */}
          <Col span={8} style={{ textAlign: "center" }}>
            {/* Profile Picture */}
            <Avatar
              size={120}
              src={uploadedImage}
              icon={<UserOutlined />}
              style={{ marginBottom: 16 }}
            />
            <Upload
              name="profile"
              maxCount={1}
              showUploadList={false}
              beforeUpload={() => false}
              onChange={handleImageUpload}
            >
              <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
            </Upload>

            {/* Bookmarked Programs */}
            {/* <Link to="/bookmarks">
              <button>View Bookmarked Programs</button>
            </Link> */}
            <h3>Your Bookmarked Programs</h3>
            {bookmarkedUniversityPrograms.length === 0 ? (
              <p>No bookmarked programs found.</p>
            ) : (
              <ul>
                {bookmarkedUniversityPrograms.map((program) => (
                  <li key={program._id}>
                    <Link to={`/program/${program._id}`}>{program.programs[0].Program_Name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </Col>

          {/* Profile Form */}
          <Col span={16}>
            <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
              <Divider orientation="left">Personal Information</Divider>
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: "Please enter your full name" }]}
              >
                <Input placeholder="e.g., Fariha Afrin Tamanna" />
              </Form.Item>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, type: "email", message: "Please enter a valid email address" }]}
              >
                <Input placeholder="e.g., fariha@gmail.com" />
              </Form.Item>
              <Form.Item
                label="Date of Birth"
                name="dob"
                rules={[{ required: true, message: "Please select your date of birth" }]}
              >
                <DatePicker style={{ width: "100%" }} placeholder="Select your date of birth" />
              </Form.Item>
              <Form.Item label="Nationality" name="nationality">
                <Input placeholder="e.g. Bangladeshi" />
              </Form.Item>

              <Divider orientation="left">Academic Background</Divider>
              <Form.Item label="Highest Degree Obtained" name="highestDegree">
                <Select placeholder="Select your highest degree">
                  <Select.Option value="BSc Degree">BSc Degree</Select.Option>
                  <Select.Option value="MSc Degree">MSc Degree</Select.Option>
                  <Select.Option value="Phd Degree">Phd Degree</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="CGPA/Percentage" name="cgpa">
                <InputNumber style={{ width: "100%" }} min={0} max={4} step={0.1} placeholder="e.g., 3.7" />
              </Form.Item>
              <Form.Item label="Multiple type Program interest" name="fieldOfStudy">
                <Input placeholder="e.g., CSE,CS " />
              </Form.Item>

              {/* <Divider orientation="left">Research Interests & Goals</Divider>
              <Form.Item label="Research Interest" name="researchInterest">
                <Input.TextArea rows={3} placeholder="Describe your research interests and future goals" />
              </Form.Item> */}
              <Form.Item label="Preferred Study Topics" name="studyTopics">
                <Select mode="tags" placeholder="Enter topics related to your study">
                  <Select.Option value="Machine Learning">Machine Learning</Select.Option>
                  <Select.Option value="Data Science">Data Science</Select.Option>
                  <Select.Option value="Cybersecurity">Cybersecurity</Select.Option>
                </Select>
              </Form.Item>

              <Divider orientation="left">Language Proficiency & Test Scores</Divider>
              <Form.Item label="IELTS Score" name="ieltsScore">
                <Slider min={0} max={9} marks={{ 0: "0", 9: "9" }} step={0.5} />
              </Form.Item>
              <Form.Item label="TOEFL Score" name="toeflScore">
                <Slider min={0} max={120} marks={{ 0: "0", 120: "120" }} step={1} />
              </Form.Item>

              <Form.Item>
                <Button type="btn btn-primary" htmlType="submit" style={{ marginTop: 16 }}>
                  Save Profile
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default UserProfile;
