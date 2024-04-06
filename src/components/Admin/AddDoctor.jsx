import React, { useEffect, useState } from "react";
import moment from "moment";
import { useForm } from "react-hook-form";
import { Button, Select, message, Input } from "antd";
import { Link } from "react-router-dom";
import { getFromLocalStorage } from "../../utils/local-storage";
import { doctorSpecialistOptions } from "../../constant/global";
import ImageUpload from "../UI/form/ImageUpload";
import dImage from "../../images/avatar.jpg";
import { DatePicker } from "antd";
import AdminLayout from "./AdminLayout";

const AddNewDoctor = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { register, handleSubmit } = useForm({});
  const [selectValue, setSelectValue] = useState({});
  const [date, setDate] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState([]);

  const authorizationToken = getFromLocalStorage('accessToken');
  const URL = `http://localhost:5000/api/v1/doctor/admin/addDoctor`;

  const handleChange = (e) => {
    setSelectValue({ ...selectValue, [e.target.name]: e.target.value });
  };
  const onChange = (date, dateString) => {
    setDate(moment(dateString).format());
  };

  const onSubmit = async (data) => {
    const obj = data;
    obj.price && obj.price.toString();
    const newObj = { ...obj, ...selectValue };
    date && (newObj["dob"] = date);
    newObj["services"] = Array.isArray(selectedItems)
      ? selectedItems.join(",")
      : null;
    const changedValue = Object.fromEntries(
      Object.entries(newObj).filter(([key, value]) => value !== "")
    );
    const formData = new FormData();
    selectedImage && formData.append("file", file);
    const changeData = JSON.stringify(changedValue);
    formData.append("data", changeData);
    // updateDoctor({ data: formData });
    console.log("Changed Data: "+formData.get("data"));
    // console.log("Changed Value: "+changedValue);
    console.log(formData.get("file"));
    try {
        setIsLoading(true);
        // const response = await fetch(URL, {
        //   method: "POST",
        //   headers: {
        //    "Content-Type": "multipart/form-data",
        //     Authorization: authorizationToken
        //   },
        //   body: formData,
        // });
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: formData.get("data"),
        });
        const data = await response.json();
        //if response is ok then set success to true
        if (response.ok) {
          setIsSuccess(true);
          setIsLoading(false);
          // clear the fields after success
          window.location.reload();
          
        } else {
          setIsError(true);
          setIsLoading(false);
          setError(data);
        }
      } catch (error) {
        isLoading(false);
        console.error("Error while adding Doctor:", error);
      }

  };

  useEffect(() => {
    if (!isLoading && isError) {
      message.error(error?.data?.message);
    }
    if (isSuccess) {
      message.success("Successfully Added Doctor !");
    }
  }, [isLoading, isError, error, isSuccess]);

  return (
    <AdminLayout>
      <div style={{ marginBottom: "10rem" }}>
        <div
          className="w-100 mb-3 rounded mb-5 p-2"
          style={{ background: "#f8f9fa" }}
        >
          <h5 className="text-title ms-2 mb-2 mt-3">Add Doctor </h5>
          <form className="row form-row" onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="col-md-12 mb-5">
              <div className="form-group">
                <div className="change-avatar d-flex gap-2 align-items-center">
                  <Link to={"/"} className="my-3 patient-img">
                    <img src={selectedImage ? selectedImage : dImage} alt="" />
                  </Link>
                  <div className="mt-3">
                    <ImageUpload
                      setSelectedImage={setSelectedImage}
                      setFile={setFile}
                    />
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label>
                  First Name <span className="text-danger">*</span>
                </label>
                <input {...register("firstName")} className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label>
                  Last Name <span className="text-danger">*</span>
                </label>
                <input {...register("lastName")} className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label>
                  Email<span className="text-danger">*</span>
                </label>
                <input {...register("email")} className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label>
                  Phone Number <span className="text-danger">*</span>
                </label>
                <input {...register("phone")} className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label>
                  Gender <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control select"
                  onChange={handleChange}
                  name="gender"
                >
                  <option value={""}>Select</option>
                  <option className="text-capitalize">male</option>
                  <option className="text-capitalize">female</option>
                  <option className="text-capitalize">other</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label>Date of Birth</label>
                <DatePicker
                  onChange={onChange}
                  format={"YYYY-MM-DD"}
                  style={{ width: "100%", padding: "6px" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label>
                  Password <span className="text-danger">*</span>
                </label>
                {/* <Input.Password
                  onChange={handleChange}
                  name="gender"
                /> */}
                <input 
                  {...register("password")} className="form-control" 
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mb-2 mt-2">
                <div className="card-body">
                  <h6 className="card-title text-secondary">About Me</h6>
                  <div className="form-group mb-2 card-label">
                    <label>Biography</label>
                    <textarea
                      {...register("biography")}
                      className="form-control"
                      rows={5}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mb-2 p-3 mt-2">
                <h6 className="card-title text-secondary">Clinic Info</h6>
                <div className="row form-row">
                  <div className="col-md-6">
                    <div className="form-group mb-2 card-label">
                      <label>Clinic Name</label>
                      <input
                        {...register("clinicName")}
                        className="form-control"
                        rows={5}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group mb-2 card-label">
                      <label>Clinic Address</label>
                      <input
                        type="text"
                        {...register("clinicAddress")}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mb-2 p-3 mt-2">
                <h6 className="card-title text-secondary">Contact Details</h6>
                <div className="row form-row">
                  <div className="col-md-6">
                    <div className="form-group mb-2 card-label">
                      <label>Address Line</label>
                      <input
                        {...register("address")}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group mb-2 card-label">
                      <label>City</label>
                      <input {...register("city")} className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group mb-2 card-label">
                      <label>State / Province</label>
                      <input {...register("state")} className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-2 card-label">
                      <label>Country</label>
                      <input
                        {...register("country")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-2 card-label">
                      <label>Postal Code</label>
                      <input
                        {...register("postalCode")}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mb-2 p-3 mt-2">
                <h6 className="card-title text-secondary">Pricing</h6>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-2 card-label">
                      <label>30 Min Fee</label>
                      <input
                        {...register("price")}
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mb-2 p-3 mt-2">
                <h6 className="card-title text-secondary">
                  Services and Specialization
                </h6>
                <div className="row form-row">
                  <div className="form-group mb-2 card-label">
                    <label>Services</label>
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: "100%" }}
                      placeholder="Please select"
                      value={selectedItems}
                      onChange={setSelectedItems}
                      options={doctorSpecialistOptions}
                    />
                    <small className="form-text text-muted">
                      Note : Type & Press enter to add new services
                    </small>
                  </div>
                  <div className="form-group mb-2 card-label">
                    <label>Specialization </label>
                    <input
                      {...register("specialization")}
                      className="input-tags form-control"
                      placeholder="Enter Specialization"
                    />
                    <small className="form-text text-muted">
                      Note : Type & Press enter to add new specialization
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mb-2 p-3 mt-2">
                <h6 className="card-title text-secondary">Education</h6>
                <div className="row form-row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group mb-2 card-label">
                      <label>Degree</label>
                      <input {...register("degree")} className="form-control" />
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group mb-2 card-label">
                      <label>College/Institute</label>
                      <input
                        {...register("college")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group mb-2 card-label">
                      <label>Year of Completion</label>
                      <input
                        {...register("completionYear")}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mb-2 p-3 mt-2">
                <h6 className="card-title text-secondary">Experience</h6>
                <div className="row form-row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group mb-2 card-label">
                      <label>Hospital Name</label>
                      <input
                        {...register("experienceHospitalName")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group mb-2 card-label">
                      <label>From</label>
                      <input
                        {...register("expericenceStart")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group mb-2 card-label">
                      <label>To</label>
                      <input
                        {...register("expericenceEnd")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group mb-2 card-label">
                      <label>Designation</label>
                      <input
                        {...register("designation")}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mb-2 p-3 mt-2">
                <h6 className="card-title text-secondary">Awards</h6>
                <div className="row form-row">
                  <div className="col-md-6">
                    <div className="form-group mb-2 card-label">
                      <label>Awards</label>
                      <input {...register("award")} className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-2 card-label">
                      <label>Year</label>
                      <input
                        {...register("awardYear")}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mb-2 p-3 mt-2">
                <h6 className="card-title text-secondary">Registrations</h6>
                <div className="row form-row">
                  <div className="col-md-6">
                    <div className="form-group mb-2 card-label">
                      <label>Registrations</label>
                      <input
                        {...register("registration")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-2 card-label">
                      <label>Year</label>
                      <input {...register("year")} className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center my-3">
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                loading={isLoading}
                disabled={isLoading ? true : false}
              >
                {isLoading ? "Adding ..." : "Add Doctor"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddNewDoctor;
