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
<<<<<<< HEAD
    <form className="rounded p-3 mt-5" style={{ background: "#f8f9fa" }}>
      <div className="row">
        <Checkbox checked={checked} onChange={onChange}>
          Allready Have an Account ?
        </Checkbox>

        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>First Name</label>
=======
    <form className="rounded p-3 mt-5">
      <div className="row">
        <Checkbox checked={checked} onChange={onChange}>
          Already Have an Account ?
        </Checkbox>

        <div className="col-md-6 col-sm-12">
          <div className="form-group my-4">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
            <input
              onChange={(e) => handleChange(e)}
              name="firstName"
              value={firstName && firstName}
<<<<<<< HEAD
              className="form-control"
=======
              className="text-form-input-field"
              placeholder="First Name"
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
              type="text"
            />
          </div>
        </div>
<<<<<<< HEAD
        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Last Name</label>
=======

        <div className="col-md-6 col-sm-12">
          <div className="form-group my-4">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
            <input
              onChange={(e) => handleChange(e)}
              name="lastName"
              value={lastName && lastName}
<<<<<<< HEAD
              className="form-control"
=======
              className="text-form-input-field"
              placeholder="Last Name"
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
              type="text"
            />
          </div>
        </div>
<<<<<<< HEAD
        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Email</label>
=======


        <div className="col-md-6 col-sm-12">
          <div className="form-group mb-4">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
            <input
              onChange={(e) => handleChange(e)}
              name="email"
              value={email && email}
<<<<<<< HEAD
              className="form-control"
=======
              className="text-form-input-field"
              placeholder="Email"
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
              type="email"
            />
          </div>
        </div>
<<<<<<< HEAD
        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Phone</label>
=======


        <div className="col-md-6 col-sm-12">
          <div className="form-group mb-4">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
            <input
              onChange={(e) => handleChange(e)}
              name="phone"
              value={phone && phone}
<<<<<<< HEAD
              className="form-control"
=======
              className="text-form-input-field"
              placeholder="Phone"
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
              type="text"
            />
          </div>
        </div>
<<<<<<< HEAD
        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Reason For Visit</label>
=======

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
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
            <textarea
              rows={8}
              onChange={(e) => handleChange(e)}
              name="reasonForVisit"
              value={reasonForVisit && reasonForVisit}
<<<<<<< HEAD
              className="form-control"
=======
              className="text-form-input-field"
              placeholder="Reason for Visit"
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
              type="text"
            />
          </div>
        </div>
<<<<<<< HEAD
        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Description</label>
=======

        <div className="col-md-6 col-sm-12">
          <div className="form-group mb-4">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
            <textarea
              rows={8}
              onChange={(e) => handleChange(e)}
              name="description"
              value={description && description}
<<<<<<< HEAD
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Address</label>
            <input
              onChange={(e) => handleChange(e)}
              name="address"
              value={address && address}
              className="form-control"
=======
              className="text-form-input-field"
              placeholder="Description (Optional)"
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
              type="text"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInformation;
