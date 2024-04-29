import { Checkbox, message, Select } from "antd";
import { useEffect, useState } from "react";
import useAuthCheck from "../../redux/hooks/useAuthCheck";

const PersonalInformation = ({
  handleChange,
  selectValue,
  setPiCheck,
  PiCheck,
  setMedicalHistory,
  medicalHistory,
  setPatientId = () => {},
}) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    reasonForVisit,
    description,
    address,
  } = selectValue;
  const [checked, setChecked] = useState(false);
  const { data } = useAuthCheck();

  // const [medicalHistory, setMedicalHistory] = useState("Share Medical History");

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  const onSelectHistoryShare = (value) => {
    setMedicalHistory(value);
  };

  useEffect(() => {
    if (checked) {
      setPiCheck(!PiCheck);
      if (data.id) {
        setPatientId(data.id);
        message.success("User Has Found !");
      } else {
        message.error("User is not Found, Please Login!");
      }
    }
  }, [checked, data, setPatientId]);

  return (
    <form className="rounded p-3 mt-5">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="form-group mb-4">
            <input
              onChange={(e) => handleChange(e)}
              name="firstName"
              value={firstName && firstName}
              className="text-form-input-field"
              placeholder="First Name"
              type="text"
            />
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="form-group mb-4">
            <input
              onChange={(e) => handleChange(e)}
              name="lastName"
              value={lastName && lastName}
              className="text-form-input-field"
              placeholder="Last Name"
              type="text"
            />
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="form-group mb-4">
            <input
              onChange={(e) => handleChange(e)}
              name="email"
              value={email && email}
              className="text-form-input-field"
              placeholder="Email"
              type="email"
            />
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="form-group mb-4">
            <input
              onChange={(e) => handleChange(e)}
              name="phone"
              value={phone && phone}
              className="text-form-input-field"
              placeholder="Phone"
              type="text"
            />
          </div>
        </div>

        <div className="col-md-12 col-sm-12">
          <div className="form-group mb-4">
            <input
              onChange={(e) => handleChange(e)}
              name="address"
              value={address && address}
              className="text-form-input-field"
              placeholder="Address"
              type="text"
            />
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="form-group mb-4">
            <textarea
              rows={8}
              onChange={(e) => handleChange(e)}
              name="reasonForVisit"
              value={reasonForVisit && reasonForVisit}
              className="text-form-input-field"
              placeholder="Reason for Visit"
              type="text"
            />
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="form-group mb-4">
            <textarea
              rows={8}
              onChange={(e) => handleChange(e)}
              name="description"
              value={description && description}s
              className="text-form-input-field"
              placeholder="Description"
              type="text"
            />
          </div>
        </div>

        <Checkbox checked={checked} onChange={onChange}>
          Already Have an Account ?
        </Checkbox>

        {/* <div className="col-md-6">
            <div className="form-group mb-2 card-label">
              <label className="label-style">Gender</label>
              <Select
                defaultValue={data?.gender ? data?.gender : "Select"}
                className="dropdown"
                onChange={(value) => handleChange(value, "gender")}
                placeholder="Select Gender"
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </div>
          </div> */}

        <div style={{marginTop: '1rem'}}>
          <Select
            value={medicalHistory}
            style={{
              width: 220,
            }}
            onChange={onSelectHistoryShare}
            options={[
              {
                value: "no",
                label: "No",
              },
              {
                value: "yes",
                label: "Yes",
              },
            ]}
          />
        </div>
      </div>
    </form>
  );
};

export default PersonalInformation;
