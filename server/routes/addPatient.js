import { Router } from 'express';
import { patient } from '../controllers/addPatient.js';

const router = new Router();

// Register
// http://localhost:3002/api/patient/add

router.post('/add', patient);

export default router;
