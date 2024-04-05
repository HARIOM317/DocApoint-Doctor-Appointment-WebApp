import express from 'express';
import { auth } from '../../middlewares/auth';
import { AuthUser } from '../../../enums';
import { PrescriptionController } from './prescription.controller';

const router = express.Router();

router.get('/doctor/prescription', auth(AuthUser.DOCTOR), PrescriptionController.getDoctorPrescriptionById);
router.get('/patient/prescription', auth(AuthUser.PATIENT), PrescriptionController.getPatientPrescriptionById);

router.get('/:id', PrescriptionController.getPrescriptionById);
router.get('/', PrescriptionController.getAllPrescriptions);

router.post('/create', auth(AuthUser.DOCTOR, AuthUser.ADMIN), PrescriptionController.createPrescription);
router.delete('/:id', auth(AuthUser.DOCTOR), PrescriptionController.deletePrescription);
// router.delete('/:id', auth(AuthUser.DOCTOR,  AuthUser.ADMIN), PrescriptionController.deletePrescription);
router.patch('/', auth(AuthUser.DOCTOR, AuthUser.ADMIN), PrescriptionController.updatePrescription);
router.patch('/update-prescription-appointment', auth(AuthUser.DOCTOR, AuthUser.ADMIN), PrescriptionController.updatePrescriptionAndAppointment);

<<<<<<< HEAD
export const PrescriptionRouter = router;
=======
export const PrescriptionRouter = router;
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
