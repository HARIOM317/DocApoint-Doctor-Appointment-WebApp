
import React, { useState} from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";



const theme = {
  background: "#fdf5e6",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#d9004c",
  headerFontColor: "#fff",
  headerFontSize: "19px",
  botBubbleColor: "#d9004c",
  botFontColor: "#fff",
  userBubbleColor: "#c4c3d0",
  userFontColor: "#080808",
  
};

// all available config props
const config = {
  width: "380px",
  height: "480px",
  hideUserAvatar: true,
  placeholder: "Type your response.",
  headerTitle: "DoctApoint Assistant",
  enableSmoothScroll: true,
  enableMobileAutoScroll: true,
  floating: true,
  floatingStyle: { background: '#d9004c' },
  botAvatar: "doctor-icon.png",
  
};

const Chatbot = (props) => {
 
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };
  
  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };


  return (
   
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? "none" : "" }}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en-US' }}
          // recognitionEnable={true}
          steps={[   
            {
              id: "intro",
              message: "Hi ! Welcome to DocApoint.",
              trigger: "question",
            },
            {
              id: "question",
              message: "Let us know how we can help you.",
              trigger: "option-question",
            },
            {
              id: "option-question",
              options: [
                { value: 1, label: "About DocApoint", trigger: "Q1" },
                { value: 2, label: "Service ", trigger: "Q2" },
                { value: 3, label: "Doctor",trigger: "Q3"},
                { value: 4, label: "Appointment",trigger:"Q4" },
                { value: 5, label: "Disease",trigger:"Q5" },
                { value: 6, label: "Contact Details", trigger:"Q6" },
              ],
            },
            {
              id: "Q1",
              message:
                "DocApoint :-  A doctor appointment is a scheduled meeting between a patient and a healthcare provider, typically a doctor or nurse practitioner. During this appointment, the patient discusses health concerns, undergoes examinations or tests, receives medical advice, and may receive treatment or referrals for further care if necessary. These appointments are essential for maintaining health and addressing medical needs promptly.",
              trigger: "q-submit",
            },
              
            //-------------------------- Service section --------------------\\

            {
              id: "Q2",
              message: "Great ! We are providing this service our platform.",
              trigger: "service-provide",
            },

            {
              id: "service-provide",
              options: [
                { value: 1, label: "Platform Services", trigger: "p-service" },
                {
                  value: 2,
                  label: " Clinic and Specialities",
                  trigger: "c-service",
                },
                { value: 3, label: "Our Services", trigger: "o-service" },
                {
                  value: 4,
                  label: "Exit Services", 
                  trigger: "q-submit",
                },
              ],
            },

              //-------------------------- Platform Services section --------------------\\

            {
              id: "p-service",
              options: [
                {
                  value: 1,
                  label: "Online Appointment Booking",
                  trigger: "OAB",
                },
                {
                  value: 2,
                  label: "Doctor Selection and Reviews",
                  trigger: "DR",
                },
                {
                  value: 3,
                  label: "Doctor Scheduling for Next 7 Days",
                  trigger: "DS",
                },
               
              ],
            },
            {
              id: "OAB",
              message: "Users can conveniently book appointments with their preferred doctors through our platform. With just a few clicks, they can schedule their visit without the hassle of waiting in long queues or making multiple phone calls.",
              trigger: "service-provide",
            },
            {
              id: "DR",
              message: "Patients can choose their doctors based on detailed profiles and reviews from other users. This feature helps them make informed decisions about their healthcare providers, ensuring they receive quality care that meets their needs.",
              trigger: "service-provide",
            },
            {
              id: "DS",
              message: "Doctors can manage their availability for the upcoming week, making it easier for patients to find a suitable time for their appointments. This scheduling feature enhances efficiency and reduces wait times for both doctors and patients.",
              trigger: "service-provide",
            },
             
              //-------------------------- Clinic and Specialities section --------------------\\

            {
              id: "c-service",
              options: [
                {
                  value: 1,
                  label: "Common Illnesses",
                  trigger: "CI",
                },
                { value: 2, label: "ENT", trigger: "ent" },
                { value: 3, label: "Orthopedic", trigger: "ort" },
                { value: 4, label: "Cardiologist", trigger: "crd" },
                { value: 5, label: "Dentist", trigger: "dent" },
              ],
            },

               {
                id: 'CI',
                message: 'Doctors across various specialties encounter a wide range of common illnesses in hospital settings. Internal medicine specialists manage conditions like hypertension and diabetes, while family medicine physicians provide comprehensive care for patients of all ages, including respiratory infections and mental health concerns. ',
                trigger: 'service-provide',
                },
                {
                  id: 'ent',
                  message: 'ENT specialists, also known as otolaryngologists, are doctors specializing in disorders of the ear, nose, and throat. They diagnose and treat conditions like sinus infections, hearing loss, and throat disorders. ENT specialists perform surgeries such as tonsillectomies and sinus surgeries. With expertise in both medical and surgical interventions, they provide comprehensive care for patients of all ages within hospital settings. ',
                  trigger: 'service-provide',
                  },
                  {
                    id: 'ort',
                    message: 'Orthopedic specialists are doctors specializing in the diagnosis, treatment, and management of musculoskeletal conditions. They address issues related to bones, joints, muscles, ligaments, tendons, and nerves. Common conditions treated by orthopedic specialists include fractures, arthritis, sports injuries, and back pain.  ',
                    trigger: 'service-provide',
                    },
                    {
                      id: 'crd',
                      message: 'Cardiologists are specialized doctors who focus on diagnosing and treating conditions related to the heart and cardiovascular system. They manage a wide range of heart issues, including coronary artery disease, heart attacks, heart failure, arrhythmias, and valvular heart diseases.  ',
                      trigger: 'service-provide',
                      },
                      {
                        id: 'dent',
                        message: 'Dentists are oral healthcare professionals specializing in diagnosing, preventing, and treating conditions affecting the teeth, gums, and mouth. They provide a wide range of services including routine dental exams, cleanings, fillings, and extractions. Additionally, dentists may perform procedures such as root canals, dental implants, and cosmetic dentistry treatments like teeth whitening and veneers.  ',
                        trigger: 'service-provide',
                        },

                        //--------------------------  Over Services section --------------------\\


            {
              id: "o-service",
              options: [
                { value: 1, label: "ICU", trigger: "icu" },
                { value: 2, label: "Chamber ", trigger: "chmbr" },
                { value: 3, label: "Test Room", trigger: "TRoom" },
                { value: 4, label: "Patient Ward", trigger: "pward" },
                { value: 5, label: "Laboratory", trigger: "laby" },
              ],
            },
             
            {
              id: 'icu',
              message: 'ICU, or Intensive Care Unit, is a hospital department that provides specialized care for critically ill patients. Staffed with highly trained medical professionals and equipped with advanced technology, the ICU offers round-the-clock monitoring and treatment for conditions like severe infections, organ failure, trauma, and post-operative complications. Its primary aim is to stabilize patients and provide intensive care to improve their chances of recovery.',
              trigger: 'service-provide',
            },
            {
              id: 'chmbr',
              message: 'A hospital chamber typically refers to a private room within a hospital facility where patients receive medical care and treatment. These chambers provide privacy and comfort for patients during their stay, allowing them to rest and recuperate in a controlled environment. Hospital chambers are equipped with essential medical equipment and amenities to support patient care, such as beds, monitoring devices, and bathroom facilities. ',
              trigger: 'service-provide',
            },
            {
              id: 'TRoom',
              message: 'A hospital test room is a dedicated space within a hospital where medical tests and diagnostic procedures are conducted. These rooms are equipped with specialized equipment and facilities necessary to perform various tests, such as blood tests, imaging scans (like X-rays, MRIs, or CT scans), electrocardiograms (ECGs), ultrasounds, and other diagnostic procedures. ',
              trigger: 'service-provide',
            },
            {
              id: 'pward',
              message: 'A hospital patient ward is a designated area within a hospital where patients are accommodated for ongoing care and observation. Patient wards typically consist of multiple beds or rooms, depending on the hospital layout and capacity. These wards may be specialized based on the type of care provided, such as medical-surgical wards, pediatric wards, maternity wards, or intensive care units (ICUs).',
              trigger: 'service-provide',
            },
            {
              id: 'laby',
              message: 'A laboratory in a hospital is a specialized facility where various medical tests and analyses are performed on patient samples to aid in diagnosis, treatment, and monitoring of health conditions. These laboratories are equipped with advanced equipment and staffed by trained laboratory professionals, including medical technologists, technicians, and pathologists.',
              trigger: 'service-provide',
            },
              
            //  ---------------- Our Doctor section ---------------\\

            {
              id: "Q3",
              message: "Great ! Let's introduce you to our export doctors.  ",
              trigger: "doctor",
            },
            {
              id: "doctor",
              message: "Thanks ! let's meet speciality for which you like to Specialization Doctors .",
              trigger: "exportD",
            },
    
            {
              id: "exportD",
              options: [
                { value: 1, label: "Dr. Harsh Kamde", trigger: "Doc1" },
                { value: 2, label: "Dr. Pooja Rajput", trigger: "Doc2" },
                { value: 3, label: "Dr. Hariom Rajput", trigger: "Doc3" },
                { value: 4, label: "Other Doctors", trigger: "ODoc" },
              ],
            },
            {
              id: "Doc1",
              message: "Dr. Harsh Kamde Specialist of the.",
              trigger: "hrsh",
            },
            {
              id: "hrsh",
              options: [
                { value: 1, label: "Neurologist", trigger: "BD" },
                { value: 2, label: "Cardiologist", trigger: "BD" },
                { value: 3, label: "Dermatologist", trigger: "BD" },
              ],
            },
          
            {
              id: "Doc2",
              message: "Dr. Pooja Rajput Specialist of the.",
              trigger: "pooja",
            },
            {
              id: "pooja",
              options: [
                {
                  value: 1,
                  label: "Common Illnesses",
                  trigger: "BD",
                },
              ],
            },
          
            {
              id: "Doc3",
              message: "Dr. Hariom Rajput Specialist of the.",
              trigger: "hari",
            },
            {
              id: "hari",
              options: [
                { value: 1, label: "Orthopedic Surgeon", trigger: "BD" },
                { value: 2, label: "Cardiologist", trigger: "BD" },
                { value: 3, label: "Ophthalmologist", trigger: "BD" },
              ],
            },
            {
              id: "BD",
              message: "Awesome ! We are provide the speciality for which you would like to book an appointment with our Doctors.",
              trigger: "SpDc",
            },
            
            {
              id: "SpDc",
              message: "Thats Great ! what would you like to",
              trigger: "doctorlbook",
            },

             {
              id: "doctorlbook",
              options: [
                { value: 1, label: "Book Appointment with our Doctor", trigger:() => handleLinkClick('http://localhost:3001/doctors') },
                { value: 2, label: "Not Interested", trigger: "q-submit" },
                ],
            },
            {
              id: "ODoc",
              message: "Thats Great ! what would you like to ",
              trigger: "otherdoctors",
            },

             {
              id: "otherdoctors",
              options: [
                { value: 1, label: "show our Doctor", trigger:() => handleLinkClick('http://localhost:3001/doctors') },
                { value: 2, label: "Not Interested", trigger: "q-submit" },
                ],
            },

            //  ---------------- Appointment section ---------------\\

            {
              id: "Q4",
              message: "Great ! Let's get you an appointment with our doctors.",
              trigger: "appointment",
            },
            {
              id: "appointment",
              message: "Awesome ! We are provide the speciality for which you would like to book an appointment.",
              trigger: "appoint-special",
            },

            {
              id: "appoint-special",
              options: [
                {
                  value: 1,
                  label: "Common Illnesses",
                  trigger: "App-bkng",
                },
                { value: 2, label: "Neurologist", trigger: "App-bkng" },
                { value: 3, label: "Orthopedic Surgeon", trigger: "App-bkng" },
                { value: 4, label: "Cardiologist", trigger: "App-bkng" },
                { value: 5, label: "Dermatologist", trigger: "App-bkng" },
                { value: 6, label: "Ophthalmologist", trigger: "App-bkng" },
              ],
            },
            {
              id: "App-bkng",
              message: "Thats Great ! what would you like to",
              trigger: "appointmentLike",
            },

             {
              id: "appointmentLike",
              options: [
                { value: 1, label: "Book Appointment", trigger:() => handleLinkClick('http://localhost:3001/doctors') },
                { value: 2, label: "Not Interested", trigger: "q-submit" },
                ],
            },

            //--------------- Disease section --------------\\
            
            {
              id: 'Q5',
              message: 'Hello, welcome to DocApoint symptom triage, with world-class content from the hospital and Clinic.',
              trigger: 'sym',
            },
            {
              id: 'sym',
              message: 'This symptom checker should not be used for any medical emergencies. Of the following emergency symptoms, please choose any that apply to your situation.',
              trigger: 'symCh',
            },
            {
              id: "symCh",
              options: [
                { value: 1, label: "Crushing chest pain, difficulty breathing", trigger: "emrgency", },
                { value: 2, label: "Sudden face drooping, difficulty speaking, weakness or numbness", trigger: "emrgency" },
                { value: 3, label: "Heavy bleeding after an injury or accident", trigger: "emrgency" },
                { value: 4, label: "Poisoning, swallowing something you shouldn't have", trigger: "emrgency" },
                { value: 5, label: "Seizure, inability to stay alert and awake", trigger: "emrgency" },
                { value: 6, label: "Sudden facial, mouth, or throat swelling", trigger: "emrgency" },
                { value: 7, label: "General Symptoms", trigger: "generalSymt" },
              ],
            },
            {
              id: 'emrgency',
              message: ' Your response indicates you need medical attention now. Please call your local emergency number immediately.',
              trigger: 'q-submit',
            },
            {
              id: 'generalSymt',
              message: 'Are you answering for yourself or someone else ?',
              trigger: 'someoneQ',
            },
            {
              id: "someoneQ",
              options: [
                { value: 1, label: "Me", trigger: "me" },
                { value: 2, label: "Someone else", trigger: "me" },
                ],
            },

            //-- me part--\\
            {
              id: 'me',
              message: 'What is your gender ?',
              trigger: 'genderB',
            },
            {
              id: "genderB",
              options: [
                { value: 1, label: "Male", trigger: "male" },
                { value: 2, label: "Female", trigger: "male" },
                { value: 3, label: "other", trigger: "male"},
                ],
            },
            {
              id: 'male',
              message: 'Great, what is your age in years?',
              trigger: 'age',
            },
               {
                id: 'age',
                user: true,
                trigger: 'usin',
              },
              {
                id: 'usin',
                message: 'Okay, now, please tell me your main symptom.',
                trigger: 'Msymts',
              },
              {
                id: "Msymts",
                options: [
                  { value: 1, label: "Fever", trigger: "fever",},
                  { value: 2, label: "Cough",trigger: "cough"},
                  { value: 3, label: "Headache",trigger:"headache" },
                  { value: 4, label: "Vomiting",trigger:"vomiting"},
                  { value: 5, label: "Abdominal pain",trigger:"abdominalPain"},
                  { value: 6, label: "No Symptoms",trigger:"q-submit"},
                ],
              },

              //----fever ----\\-
              {
                id: 'fever',
                message: 'How high is your fever ?',
                trigger: 'hfvr',
              },
              {
                id: "hfvr",
                options: [
                  { value: 1, label: "Not sure or lower than 100.4F (38C)", trigger: "loc100"},
                  { value: 2, label: "Between 100.4F and 103F (38C and 39.4C)", trigger: "loc100" },
                  { value: 3, label: "Between 103F and 104.8F (39.4C and 40.4C)", trigger: "loc100"},
                  { value: 4, label: "104.9F or higher (>40.5C)" , trigger: "loc100"},
                ],
              },
              {
                id: 'loc100',
                message: 'How long has your fever been going on? (Days)',
                trigger: 'dfiver',
              },
              {
                id: 'dfiver',
                user: true,
                trigger: 'dayin',
              },
              {
                id: 'dayin',
                message: 'Do you have a headache?',
                trigger: 'feversymptom',
              },
              {
                id: 'feversymptom',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'yhdch' },
                  { value: 'n', label: 'No', trigger: 'yhdch' },
                ],
              },
              {
                id: 'yhdch',
                message: 'Do you have a Cough?',
                trigger: 'fvrcgh',
              },
              {
                id: 'fvrcgh',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'ycough' },
                  { value: 'n', label: 'No', trigger: 'ycough' },
                ],
              },
              {
                id: 'ycough',
                message: 'Do you have a sore throat?',
                trigger: 'fvrsth',
              },
              {
                id: 'fvrsth',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'ysth' },
                  { value: 'n', label: 'No', trigger: 'ysth' },
                ],
              },
              {
                id: 'ysth',
                message: 'Do you have a  vomiting ?',
                trigger: 'fvrvmt',
              },
              {
                id: 'fvrvmt',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'yvmt' },
                  { value: 'n', label: 'No', trigger: 'yvmt' },
                ],
              },
              {
                id: 'yvmt',
                message: 'Do you have a body aches ?',
                trigger: 'fvrbacs',
              },
              {
                id: 'fvrbacs',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'ybacs' },
                  { value: 'n', label: 'No', trigger: 'ybacs' },
                ],
              },
              {
                id: 'ybacs',
                message: 'Recommend over-the-counter medications like acetaminophen or ibuprofen, rest, and hydration for fever treatment.',
                trigger: 'symptom-question-submit',
              },
             
              //---- cough ----\\
              {
                id: 'cough',
                message: 'How long has your cough been going on ?(Days)',
                trigger: 'dcough',
              },
              {
                id: 'dcough',
                user: true,
                trigger: 'dayincgh',
              },
              {
                id: 'dayincgh',
                message: 'Do you have a nasal congestion ?',
                trigger: 'cghnc',
              },
              {
                id: 'cghnc',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'ycnc' },
                  { value: 'n', label: 'No', trigger: 'ycnc' },
                ],
              },
              {
                id: 'ycnc',
                message: 'Do you have a chest congestion ?',
                trigger: 'cghchc',
              },
              {
                id: 'cghchc',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'ycchc' },
                  { value: 'n', label: 'No', trigger: 'ycchc' },
                ],
              },
              {
                id: 'ycchc',
                message: 'Do you have a wheezing ?',
                trigger: 'cghwh',
              },
              {
                id: 'cghwh',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'ycwh' },
                  { value: 'n', label: 'No', trigger: 'ycwh' },
                ],
              },
              {
                id: 'ycwh',
                message: 'Cough treatment may include over-the-counter cough suppressants, hydration, and addressing underlying causes.',
                trigger: 'symptom-question-submit',
              },

              //---- Headache ---
              
              {
                id: 'headache',
                message: 'How has/have your headache(s) been changing over time?',
                trigger: 'headache-change',
              },
              {
                id: 'headache-change',
                options: [
                  { value: '1', label: 'Getting better', trigger: 'headacheChtime' },
                  { value: '2', label: 'Staying the same', trigger: 'headacheChtime' },
                  { value: '3', label: 'Getting worse', trigger: 'headacheChtime' },
                ],
              },
              {
                id: 'headacheChtime',
                message: 'Is the headache...?',
                trigger: 'headachetype',
              },
              {
                id: 'headachetype',
                options: [
                  { value: '1', label: 'Like one I have had before', trigger: 'headacheT' },
                  { value: '2', label: 'A new type of headache', trigger: 'headacheT' },
                  { value: '3', label: 'Unsure', trigger: 'headacheT' },
                ],
              },
              {
                id: 'headacheT',
                message: 'How severe is your headache?',
                trigger: 'headachesevere',
              },
              {
                id: 'headachesevere',
                options: [
                  { value: '1', label: 'Discomfort or mild pain', trigger: 'headacheSvr' },
                  { value: '2', label: 'Moderate: limiting activities and/or need for painkillers', trigger: 'headacheSvr' },
                  { value: '3', label: 'Severe: close to the worst pain I have ever experienced', trigger: 'headacheSvr' },
                ],
              },
              {
                id: 'headacheT',
                message: 'How severe is your headache?',
                trigger: 'headachesevere',
              },
              {
                id: 'headachesevere',
                options: [
                  { value: '1', label: 'Discomfort or mild pain', trigger: 'headacheSvr' },
                  { value: '2', label: 'Moderate: limiting activities and/or need for painkillers', trigger: 'headacheSvr' },
                  { value: '3', label: 'Severe: close to the worst pain I have ever experienced', trigger: 'headacheSvr' },
                ],
              },
              {
                id: 'headacheSvr',
                message: 'How long has your current headache been going on?(Days)',
                trigger: 'headachetime',
              },
              {
                id: 'headachetime',
                user: true,
                trigger: 'hdchtm',
              },
              {
                id: 'hdchtm',
                message: 'Do you have a  nausea ?',
                trigger: 'hdchns',
              },
              {
                id: 'hdchns',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'yhdchns' },
                  { value: 'n', label: 'No', trigger: 'yhdchns' },
                ],
              },
              {
                id: 'yhdchns',
                message: 'headaches, recommend over-the-counter pain relievers, rest, hydration, and stress management.',
                trigger: 'symptom-question-submit',
              },

              //-----------  Vomiting ----
              {
                id: 'vomiting',
                message: 'How many times have you vomited in the last 24 hours?',
                trigger: 'vomit',
              },
              {
                id: 'vomit',
                options: [
                  { value: '1', label: 'Once or twice', trigger: 'vomitingHrs' },
                  { value: '2', label: 'Three to five times', trigger: 'vomitingHrs' },
                  { value: '3', label: 'More than six times', trigger: 'vomitingHrs' },
                ],
              },
              {
                id: 'vomitingHrs',
                message: 'How long has your vomiting been going on?(Days)',
                trigger: 'vomitingtime',
              },
              {
                id: 'vomitingtime',
                user: true,
                trigger: 'vmttm',
              },
              {
                id: 'vmttm',
                message: 'Do you have a abdominal pain ?',
                trigger: 'vmtadp',
              },
              {
                id: 'vmtadp',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'yvmtadp' },
                  { value: 'n', label: 'No', trigger: 'yvmtadp' },
                ],
              },
              {
                id: 'yvmtadp',
                message: 'Do you have a dehydration ?',
                trigger: 'vmtdhdr',
              },
              {
                id: 'vmtdhdr',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'yvmtdhdr' },
                  { value: 'n', label: 'No', trigger: 'yvmtdhdr' },
                ],
              },
              {
                id: 'yvmtdhdr',
                message: 'Treatment for vomiting includes hydration, antiemetics, and addressing underlying causes such as infections or gastrointestinal disorders.',
                trigger: 'symptom-question-submit',
              },

              //----------- Abdominal Pain -----
              {
                id: 'abdominalPain',
                message: 'Is your abdominal pain getting better or worse?',
                trigger: 'abdmnpain',
              },
              {
                id: 'abdmnpain',
                options: [
                  { value: '1', label: 'Getting better', trigger: 'abdpain' },
                  { value: '2', label: 'Staying the same', trigger: 'abdpain' },
                  { value: '3', label: 'Getting worse', trigger: 'abdpain' },
                ],
              },
              {
                id: 'abdpain',
                message: 'Is your abdominal pain constant or come-and-go?',
                trigger: 'abdmnccg',
              },
              {
                id: 'abdmnccg',
                options: [
                  { value: '1', label: 'Constant', trigger: 'abdccg' },
                  { value: '2', label: 'Come-and-go', trigger: 'abdccg' },
                ],
              },
              {
                id: 'abdccg',
                message: 'How severe is your abdominal pain?',
                trigger: 'abdmnsevere',
              },
              {
                id: 'abdmnsevere',
                options: [
                  { value: '1', label: 'Discomfort or mild pain', trigger: 'abdmsvr' },
                  { value: '2', label: 'Moderate: limiting activities and/or need for painkillers', trigger: 'abdmsvr' },
                  { value: '3', label: 'Severe: close to the worst pain I have ever experienced', trigger: 'abdmsvr' },
                ],
              },
              {
                id: 'abdmsvr',
                message: 'How long has your abdominal pain been going on ?(Days)',
                trigger: 'abdmtime',
              },
              {
                id: 'abdmtime',
                user: true,
                trigger: 'abdmtm',
              },
              {
                id: 'abdmtm',
                message: 'Do you have a constipation ?',
                trigger: 'abdmcnp',
              },
              {
                id: 'abdmcnp',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'yabdmcnp' },
                  { value: 'n', label: 'No', trigger: 'yabdmcnp' },
                ],
              },
              {
                id: 'yabdmcnp',
                message: 'Do you have a bloating ?',
                trigger: 'abdmbltg',
              },
              {
                id: 'abdmbltg',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'yabdmbltg' },
                  { value: 'n', label: 'No', trigger: 'yabdmbltg' },
                ],
              },
              {
                id: 'yabdmbltg',
                message: 'Do you have a gas ?',
                trigger: 'abdmgas',
              },
              {
                id: 'abdmgas',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'yabdmgas' },
                  { value: 'n', label: 'No', trigger: 'yabdmgas' },
                ],
              },
              {
                id: 'yabdmgas',
                message: 'Treatment of abdominal pain with pain relievers, rest, hydration, and addressing underlying causes.',
                trigger: 'symptom-question-submit',
              },
             
             
            //--------------- Contect section --------------\\
            
            {
              id: 'Q6',
              message: 'Please choose one of the following to know their contact details.',
              trigger: 'cntct',
            },
            {
              id: 'cntct',
              options: [
                { value: 1, label: "Helpline number", trigger: "HN" },
                { value: 2, label: "Email", trigger: "EM" },
              ],
            },
            {
              id: 'HN',
              message: 'You can call this number +91 1234554321 . ',
              trigger: 'q-submit',
            },
            {
              id: 'EM',
              message: 'You can send the messages this email xyz@gmail.com . ',
              trigger: 'q-submit',
            },

            //--------------- question submit --------------\\

            {
              id: 'symptom-question-submit',
              message: 'Do you have any other symptoms ?',
              trigger: 'anySymptomQ',
            },
            {
              id: 'anySymptomQ',
              options: [
                { value: 'y', label: 'Yes', trigger: 'usin' },
                { value: 'n', label: 'No', trigger: 'q-submit' },
              ],
            },
               {
                id: 'q-submit',
                message: 'Do you have any other questions !?',
                trigger: 'submit',
              },
              {
                id: 'submit',
                options: [
                  { value: 'y', label: 'Yes', trigger: 'question' },
                  { value: 'n', label: 'No', trigger: 'end-message' },
                ],
              },
              {
                id: 'end-message',
                options: [
                  { value: '1', label: 'Start new Conversation', trigger: 'question' },
                  { value: '2', label: 'Not interested', trigger: 'wlcmBack' },
                ],
              },   
              {
                id: 'wlcmBack',
                message: 'Good to see you !',
                trigger:'question',
              },  
          ]}
          
          {...config}
        />
      </div>
    </ThemeProvider>
  );
};
export default Chatbot;

