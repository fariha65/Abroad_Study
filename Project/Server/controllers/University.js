import University from '../models/university.js';
import mongoose from 'mongoose';
// Function to fetch all universities
export const getUniversities = async (req, res) => {
  try {
    const universities = await University.find(); // Fetching all universities from the database
    res.json(universities); // Responding with universities
  } catch (error) {
    console.error(error); // Log error
    res.status(500).json({ message: 'Error fetching universities' }); // Sending error response
  }
};

// Function to add a new university
export const addUniversity = async (req, res) => {
  try {
    const newUniversity = new University(req.body); // Creating a new university document
    await newUniversity.save(); // Saving the university to the database
    res.status(201).json(newUniversity); // Responding with the new university
  } catch (error) {
    console.error(error); // Log error
    res.status(500).json({ message: 'Error adding university' }); // Sending error response
  }
};

// Function to fetch a single university by ID


export const getUniversityById = async (req, res) => {
  const { id } = req.params;

  try {
    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid university ID" });
    }

    // Attempt to find the university by ID
    const university = await University.findById(id).populate('programs');

    // Check if university exists
    if (!university) {
      return res.status(404).json({ message: "University not found" });
    }

    // Return the university details
    res.json(university);
  } catch (error) {
    console.error("Error fetching university:", error); // Log the error
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};



// Function to fetch programs with pagination and filtering
export const getPrograms = async (req, res) => {
  const { page = 1, pageSize = 10, search = '' } = req.query;
  const query = search ? { "Program_Name": { $regex: search, $options: "i" } } : {};

  try {
    const total = await University.countDocuments(query);
    const programs = await University.find(query)
      .skip((page - 1) * pageSize)
      .limit(Number(pageSize));
    res.status(200).json({ data: programs, total });
  } catch (error) {
    console.error("Error fetching programs:", error);
    res.status(500).json({ error: "Error fetching programs" });
  }
};
