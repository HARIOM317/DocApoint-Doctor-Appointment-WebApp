import { Checkbox, message } from "antd";
import { useEffect, useState } from "react";
import useAuthCheck from "../../redux/hooks/useAuthCheck";

const PersonalInformation = ({
  handleChange,
  selectValue,
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

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    if (checked) {
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
        <Checkbox checked={checked} onChange={onChange}>
          Already Have an Account ?
        </Checkbox>

        <div className="col-md-6 col-sm-12">
          <div className="form-group my-4">
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
          <div className="form-group my-4">
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
              value={description && description}
              className="text-form-input-field"
              placeholder="Description (Optional)"
              type="text"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInformation;
