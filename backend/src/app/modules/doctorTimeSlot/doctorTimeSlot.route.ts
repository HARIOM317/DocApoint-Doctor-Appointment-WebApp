import express from 'express';
import { auth } from '../../middlewares/auth';
import { AuthUser } from '../../../enums';
import { doctorTimeSlotController } from './doctorTimeSlot.controller';

const router = express.Router();

router.get('/my-slot', auth(AuthUser.DOCTOR), doctorTimeSlotController.getMyTimeSlot);
router.get('/:id', auth(AuthUser.DOCTOR), doctorTimeSlotController.getTimeSlot);
router.get('/appointment-time/:id', doctorTimeSlotController.getAppointmentTimeOfEachDoctor);
router.post('/create', auth(AuthUser.DOCTOR), doctorTimeSlotController.createTimeSlot);
router.get('/', doctorTimeSlotController.getAllTimeSlot);
router.patch('/', auth(AuthUser.DOCTOR), doctorTimeSlotController.updateTimeSlot);
router.delete('/:id', auth(AuthUser.DOCTOR), doctorTimeSlotController.deleteTimeSlot);

<<<<<<< HEAD
export const DoctorTimeSlotRouter = router;
=======
export const DoctorTimeSlotRouter = router;
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
