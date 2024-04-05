import "../../stylesheets/TrackAppointment.css";
import { appointStatusDsc } from "../../constant/appointmentStatus";
<<<<<<< HEAD
const AppointmentTimeLine = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="time-line-section">
              <ul className="timeline timeline-horizontal">
                <li className="timeline-item mb-5 position-relative">
                  <div className="timeline-badge bg-white"></div>
                  <div
                    className="timeline-panel position-relative shadow rounded p-2"
                    style={{ maxWidth: "220px" }}
                  >
                    <div>
                      <h6>Payment - {data?.paymentStatus}</h6>
                      <p className="form-text mb-0">
                        {appointStatusDsc?.payment}
                      </p>
                    </div>
                  </div>
                </li>

                <li className="timeline-item mb-5 position-relative">
                  <div className="timeline-badge bg-white"></div>
                  <div
                    className="timeline-panel position-relative shadow rounded p-2"
                    style={{ maxWidth: "220px" }}
                  >
                    <div>
                      <h6>Appointment - {data?.status}</h6>
                      <p className="form-text mb-0">
                        {appointStatusDsc.appointment[data?.status]}
                      </p>
                    </div>
                  </div>
                </li>

                <li className="timeline-item mb-5 position-relative">
                  <div className="timeline-badge bg-white"></div>
                  <div
                    className="timeline-panel position-relative shadow rounded p-2"
                    style={{ maxWidth: "220px" }}
                  >
                    <div>
                      <h6>
                        Follow-up Date -{" "}
                        {data?.followUp ? data?.followUp : "Not Scheduled Yet"}
                      </h6>
                      <p className="form-text mb-0">
                        {data?.followUp && appointStatusDsc.followUpDate}
                      </p>
                    </div>
                  </div>
                </li>

                <li className="timeline-item mb-5 position-relative">
                  <div className="timeline-badge bg-white"></div>
                  <div
                    className="timeline-panel position-relative shadow rounded p-2"
                    style={{ maxWidth: "220px" }}
                  >
                    <div>
                      <h6>Prescription - {data?.prescriptionStatus}</h6>
                      <p className="form-text mb-0">
                        {
                          appointStatusDsc.prescriptionStatus[
                            data?.prescriptionStatus
                          ]
                        }
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
=======
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const AppointmentTimeLine = ({ data }) => {
  return (
    <>
      <section>
        <VerticalTimeline lineColor="var(--textLight)">
          <VerticalTimelineElement
            iconStyle={{
              background: "var(--primaryColor)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.25rem",
            }}
            icon={<i class="fa-solid fa-money-check-dollar"></i>}
          >
            <h3 className="timeline-heading">
              Payment - {data?.paymentStatus}
            </h3>
            <p className="timeline-description">{appointStatusDsc?.payment}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{
              background: "var(--primaryColor)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.25rem",
            }}
            icon={<i class="fa-solid fa-calendar-check"></i>}
          >
            <h3 className="timeline-heading">Appointment - {data?.status}</h3>
            <p className="timeline-description">
              {appointStatusDsc.appointment[data?.status]}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{
              background: "var(--primaryColor)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.25rem",
            }}
            icon={<i class="fa-solid fa-list"></i>}
          >
            <h3 className="timeline-heading">
              Follow-up Date -{" "}
              {data?.followUp ? data?.followUp : "Not Scheduled Yet"}
            </h3>
            <p className="timeline-description">
              {data?.followUp && appointStatusDsc.followUpDate}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{
              background: "var(--primaryColor)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.25rem",
            }}
            icon={<i class="fa-solid fa-file-lines"></i>}
          >
            <h3 className="timeline-heading">
              Prescription - {data?.prescriptionStatus}
            </h3>
            <p className="timeline-description">
              {appointStatusDsc.prescriptionStatus[data?.prescriptionStatus]}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
    </>
  );
};

<<<<<<< HEAD
export default AppointmentTimeLine;
=======
export default AppointmentTimeLine;
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
