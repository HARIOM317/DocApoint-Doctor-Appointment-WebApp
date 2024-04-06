import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../../../stylesheets/doctorStylesheets/Overview.css";


const OverView = () => {

  const doctorServices = [
    "Tooth cleaning",
    "Root Canal Therapy",
    "Implants",
    "Composite Bonding",
    "Fissure Sealants",
    "Surgical Extractions",
  ];

  const doctorSpecializations = [
    "Children Care",
    "Dental Care",
    "Oral Surgery",
    "Orthodontist",
    "Periodontist",
    "Prosthodontics",
  ];

  const doctorEducationAPI = [
    {
      id: 1,
      icon: "fa-solid fa-graduation-cap",
      date: "2017 - 2019",
      title: "NIT Bhopal",
      description:
        "Master in Pharmacy, Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },

    {
      id: 2,
      icon: "fa-solid fa-user-graduate",
      date: "2013 - 2017",
      title: "SISTec Bhopal",
      description:
        "Bachelor in Pharmacy, Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
  ];

  const doctorExperienceAPI = [
    {
      id: 1,
      icon: "fa-solid fa-check-double",
      date: "2020 - Present (4 years)",
      title: "Glowing Smiles Family Dental Clinic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequuntur maiores animi odio placeat. Molestiae alias vitae reprehenderit beatae voluptatibus, omnis, ratione assumenda quisquam quis ducimus officia odio eaque minima",
    },

    {
      id: 2,
      icon: "fa-solid fa-briefcase",
      date: "2017 - 2020 (3 years)",
      title: "Comfort Care Dental Clinic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequuntur maiores animi odio placeat. Molestiae alias vitae reprehenderit beatae voluptatibus, omnis, ratione assumenda quisquam quis ducimus officia odio eaque minima",
    },

    {
      id: 3,
      icon: "fa-solid fa-user-doctor",
      date: "2015 - 2017 (2 years)",
      title: "Dream Smile Dental Practice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequuntur maiores animi odio placeat. Molestiae alias vitae reprehenderit beatae voluptatibus, omnis, ratione assumenda quisquam quis ducimus officia odio eaque minima",
    },
  ];

  const doctorAwardsAPI = [
    {
      id: 1,
      icon: "fa-solid fa-trophy",
      date: "July 2022",
      title: "Humanitarian Award",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },

    {
      id: 2,
      icon: "fa-solid fa-medal",
      date: "March 2020",
      title: "Certificate for International Volunteer Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },

    {
      id: 3,
      icon: "fa-solid fa-award",
      date: "August 2019",
      title: "The Dental Professional of The Year Award",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
  ];

  return (
    <div className="col-md-12 col-lg-12">
      <div className="mb-3">
        <h5 className="overview-text">About Me</h5>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div>
        <h5 className="overview-text">Education</h5>

        <VerticalTimeline lineColor="var(--textLight)">
          {doctorEducationAPI.map((item) => {
            return (
              <VerticalTimelineElement
                iconStyle={{
                  background: "var(--primaryColor)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.25rem",
                }}
                icon={<i className={item.icon}></i>}
                date={item.date}
              >
                <h3 className="timeline-heading">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>

      <div className="my-5">
        <h5 className="overview-text">Work & Experience</h5>
        <VerticalTimeline lineColor="var(--textLight)">
          {doctorExperienceAPI.map((item) => {
            return (
              <VerticalTimelineElement
                iconStyle={{
                  background: "var(--primaryColor)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.25rem",
                }}
                icon={<i className={item.icon}></i>}
                date={item.date}
              >
                <h3 className="timeline-heading">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      <div>
        <h5 className="overview-text">Awards</h5>

        <VerticalTimeline lineColor="var(--textLight)">
          {doctorAwardsAPI.map((item) => {
            return (
              <VerticalTimelineElement
                iconStyle={{
                  background: "var(--primaryColor)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.25rem",
                }}
                icon={<i className={item.icon}></i>}
                date={item.date}
              >
                <h3 className="timeline-heading">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>

      <div className="row mt-5">
        <h5 className="overview-text">Services</h5>
        {doctorServices.map((service) => {
          return (
            <>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="doctor-service-card">{service}</div>
              </div>
            </>
          );
        })}
      </div>

      <div className="row mt-5">
        <h5 className="overview-text">Specializations</h5>

        {doctorSpecializations.map((service) => {
          return (
            <>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="doctor-specialization-card">{service}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default OverView;