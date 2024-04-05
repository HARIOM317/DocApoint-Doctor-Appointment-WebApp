import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi"

const TIMELOT_URL = '/timeslot'

export const timeSlotApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createTimeSlot: build.mutation({
            query: ({ data }) => ({
                url: `${TIMELOT_URL}/create`,
                method: 'POST',
                data: data
            }),
            invalidatesTags: [tagTypes.timeSlot]
        }),
        getAllTimeSlot: build.query({
            query: () => ({
                url: `${TIMELOT_URL}/`,
                method: 'GET'
            }),
            providesTags: [tagTypes.timeSlot]
        }),
        getTimeSlot: build.query({
            query: (id) => ({
                url: `${TIMELOT_URL}/${id}`,
                method: 'GET'
            }),
            providesTags: [tagTypes.timeSlot]
        }),
        getAppointmentTime: build.query({
<<<<<<< HEAD
            query: ({ day, date, id }) => ({
                url: `${TIMELOT_URL}/appointment-time/${id}`,
                method: 'GET',
                params: {day:day, date: date}
=======
            query: ({ day, id }) => ({
                url: `${TIMELOT_URL}/appointment-time/${id}`,
                method: 'GET',
                params: {day:day}
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
            }
            ),
            providesTags: [tagTypes.timeSlot]
        }),
        getDoctorTimeSlot: build.query({
            query: (arg) => ({
                url: `${TIMELOT_URL}/my-slot`,
                method: 'GET',
                params: arg
            }),
            providesTags: [tagTypes.timeSlot]
        }),
        deleteTimeSlot: build.mutation({
            query: (id) => ({
                url: `${TIMELOT_URL}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [tagTypes.timeSlot]
        }),
        
        // deleteTimeSlot: build.query({
        //     query: (id) => ({
        //         url: `${TIMELOT_URL}/${id}`,
        //         method: 'DELETE'
        //     }),
        //     invalidatesTags: [tagTypes.timeSlot]
        // }),
        UpdateTimeSlot: build.mutation({
            query: (data) => ({
                url: `${TIMELOT_URL}`,
                method: 'PATCH',
                data: data
            }),
            invalidatesTags: [tagTypes.timeSlot]
        }),
    })
})

export const {
    useGetAllTimeSlotQuery,
    useDeleteTimeSlotMutation,
    useGetDoctorTimeSlotQuery,
    useGetTimeSlotQuery,
    useUpdateTimeSlotMutation,
    useCreateTimeSlotMutation,
    useGetAppointmentTimeQuery
<<<<<<< HEAD
} = timeSlotApi;
=======
} = timeSlotApi;
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
