import express from 'express';
import { getUniversities, addUniversity, getUniversityById, getPrograms } from '../controllers/University.js';

const router = express.Router();

// Define routes for universities
router.get('/programs', getPrograms); // Fetch programs with pagination and filtering
router.get('/', getUniversities); // Get all universities
router.post('/', addUniversity); // Add a new university
router.get('/:id', getUniversityById); // Get a university by ID

export default router;
