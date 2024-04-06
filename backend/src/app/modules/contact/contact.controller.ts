import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ContactService } from "./contact.service";
import { Contact } from "@prisma/client";

const ContactUs = catchAsync(async (req: Request, res: Response) => {
    const result = await ContactService.contactUs(req.body);
    sendResponse(res, {
        statusCode: 200,
        message: 'Contecting messege send successfully !!',
        success: true,
        data: result
    })
})

const getAllContactUs = catchAsync(async (req: Request, res: Response) => {
    const result = await ContactService.getAllContactUs();
    sendResponse<Contact[]>(res, {
        statusCode: 200,
        message: 'Successfully Retrieve All ContactUs !!',
        success: true,
        data: result,
    })
})

export const ContactController = {
    ContactUs,
    getAllContactUs
}