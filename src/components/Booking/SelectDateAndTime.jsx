import moment from "moment";
import { DatePicker } from "antd";

const SelectDateAndTime = ({
  content,
  handleDateChange,
  disabledDateTime,
  selectedDate,
  dContent,
  selectTime,
}) => {
  return (
    <div style={{ marginTop: "5rem" }}>
<<<<<<< HEAD
      <div>
        <h5 className="text-title">Selected Doctor</h5>
        {content}
      </div>

      <dir className="row">
        <div className="col-md-5 col-sm-12 mt-3">
          <h5 className="text-title mb-3">Please Select Date</h5>
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={disabledDateTime}
            open={true}
=======
      <dir className="row">
        <div className="col-md-5 col-sm-12">
          <div>
            <h5 className="heading">Selected Doctor</h5>
            {content}
          </div>
          <h5 className="heading mt-5 mb-3">Please Select Date</h5>
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={disabledDateTime}
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
            onChange={handleDateChange}
          />
        </div>

<<<<<<< HEAD
        <div className="col-md-7 col-sm-12 mt-3">
          {selectedDate && (
            <h5 className="text-title mb-3">
              Selected Date: {selectedDate && moment(selectedDate).format("LL")}
              {selectTime && "Time :" + selectTime}
            </h5>
          )}
          <div className="date-card rounded">
            <div className="row text-center mt-3">
              {!selectedDate ? (
                <h5 className="text-title d-flex justify-content-center align-items-center mt-5">
=======
        <div className="col-md-7 col-sm-12">
          {selectedDate && (
            <h5 style={{color: "var(--textColor)", marginBottom: '1.5rem', fontSize: '1.3rem', fontWeight: '500'}}>
              Selected Date: {selectedDate && moment(selectedDate).format("LL")}
              {selectTime && " and Time: " + selectTime}
            </h5>
          )}
          <div className="date-card rounded">
            <div className="row text-center">
              {!selectedDate ? (
                <h5 className="heading d-flex justify-content-center align-items-center mt-5">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                  Please Select A Date First
                </h5>
              ) : (
                dContent
              )}
            </div>
          </div>
        </div>
      </dir>
    </div>
  );
};

export default SelectDateAndTime;
