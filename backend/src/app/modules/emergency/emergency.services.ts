import { Admin, Emergency, PrismaClient } from "@prisma/client";
import ApiError from "../../../errors/apiError";
import httpStatus from "http-status";
import { Request } from "express";
import { IUpload } from "../../../interfaces/file";
import { CloudinaryHelper } from "../../../helpers/uploadHelper";
import { EmailtTransporter } from "../../../helpers/emailTransporter";
import * as path from 'path';
import moment from 'moment';

const prisma = new PrismaClient();

// model Emergency {
//     id           String         @id @default(uuid())
//     patientName  String
//     mobile       String
//     subject      String
//     city         String
//     address      String
//     createdAt    DateTime       @default(now())
//     updatedAt    DateTime       @updatedAt

//     @@map("Emergency")
//   }

interface EmergencyPayload {
    patientName: string;
    mobile: string;
    city: string;
    address: string;
    subject: string;
}

const createEmergency = async (payload: EmergencyPayload): Promise<Emergency | null | any> => {
    const { patientName, address, mobile, city, subject } = payload;

    if (!address || !patientName || !city || !subject || !mobile) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Missing required fields!');
    }
    try {

        const EmergencyRes = await prisma.emergency.create({
            data: payload,
        });

        const findAmbulance = await prisma.ambulance.findFirst({
            where: {
                city: city,
                status: false,
            }
        });

        if (!findAmbulance) {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'No available ambulance found!');
        }

        // model Ambulance {
        //     id           String         @id @default(uuid())
        //     driverName  String
        //     mobile       String
        //     email         String               
        //     city         String
        //     ambulanceNumber      String     
        //     status        Boolean?       @default(false)
        //     createdAt    DateTime       @default(now())
        //     updatedAt    DateTime       @updatedAt
          
        //     @@map("Ambulance")
        //   }
        const pathName = path.join(__dirname, '../../../../template/emergency.html');
        const emergencyObj = {
            status: findAmbulance.status,
            city: findAmbulance.city,
            driverName : findAmbulance.driverName,
            mobile : findAmbulance.mobile,
            ambulanceNumber : findAmbulance.ambulanceNumber,
            created: moment(findAmbulance.createdAt).format('LL'),
            updated : moment(findAmbulance.updatedAt).format('LL')
        };
        const replacementObj = emergencyObj;
        // const subject = `emergency Confirm With Dr ${emergency?.doctor?.firstName + ' ' + emergency?.doctor?.lastName} at ${emergency.scheduleDate} + ' ' + ${emergency.scheduleTime}`
        // const toMail = `${emergency.email + ',' + emergency.doctor?.email}`;
        // EmailtTransporter({ pathName, replacementObj, toMail, subject })
        // return emergency;
    } catch (error) {
        throw new ApiError(httpStatus.NO_CONTENT, "Unable to create Emergency!");
    }
}

const getAllEmergency = async (): Promise<Emergency[] | null> => {
    const result = await prisma.emergency.findMany();
    return result;
}

const getAmbulace = async (id: string): Promise<Emergency | null> => {
    const result = await prisma.emergency.findUnique({
        where: {
            id: id
        }
    });
    return result;
}

const deleteEmergency = async (id: string): Promise<Emergency | null> => {
    const result = await prisma.emergency.delete({
        where: {
            id: id
        }
    });
    return result;
}



const updateEmergency = async (req: Request): Promise<Admin> => {
    const file = req.file as IUpload;
    const id = req.params.id as string;
    const user = JSON.parse(req.body.data);

    if (file) {
        const uploadImage = await CloudinaryHelper.uploadFile(file);
        if (uploadImage) {
            user.img = uploadImage.secure_url
        } else {
            throw new ApiError(httpStatus.EXPECTATION_FAILED, 'Failed to Upload Image');
        }
    }
    const result = await prisma.admin.update({
        where: { id },
        data: user
    })
    return result;
}

export const EmergencyService = {
    createEmergency,
    updateEmergency,
    getAllEmergency,
    deleteEmergency,
    getAmbulace
}