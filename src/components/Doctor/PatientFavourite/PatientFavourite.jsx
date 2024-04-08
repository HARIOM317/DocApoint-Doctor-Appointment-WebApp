import { NavLink } from "react-router-dom";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import {
  useGetFavouriteQuery,
  useRemoveFavouriteMutation,
} from "../../../redux/api/favouriteApi";
import { useEffect } from "react";
import { Empty, message, Tooltip } from "antd";
import {
  FaBookmark,
} from "react-icons/fa";
import "../../../stylesheets/doctorStylesheets/PatientFavorite.css";
import profileImage from "../../../images/home/doctorProfile.jpg";

const PatientFavouriteDoctor = () => {
  const { data, isLoading, isError } = useGetFavouriteQuery();
  const [
    removeFavourite,
    { isLoading: FIsLoading, isError: fIsError, error: fError, isSuccess },
  ] = useRemoveFavouriteMutation();

  const handleRemoveFavourite = (id) => {
    removeFavourite({ doctorId: id });
  };

  useEffect(() => {
    if (!FIsLoading && fIsError) {
      message.error(fError?.data?.message);
    }
    if (isSuccess) {
      message.success("Successfully Favourite Removed");
    }
  }, [isSuccess, fIsError]);

  let content = null;
  if (!isLoading && isError) content = <div>Something Went Wrong !</div>;
  if (!isLoading && !isError && data?.length === 0) content = <Empty />;
  if (!isLoading && !isError && data?.length > 0)
    content = (
      <>
        {data &&
          data?.map((item) => (
            <div className="favorite-doctor col-md-4 col-sm-12">
              <div className="flexColCenter profile-card">
                <a
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                  }}
                  onClick={() => handleRemoveFavourite(item?.doctor?.id)}
                >
                  <Tooltip title="Remove from Favorite">
                    <FaBookmark />
                  </Tooltip>
                </a>

                <div className="image">
                  <img
                    className="profile-img"
                    alt=""
                    src={
                      item?.doctor?.img == null
                        ? profileImage
                        : item?.doctor?.img
                    }
                  />
                </div>

                <div className="text-data">
                  <span className="name">
                    {item?.doctor?.firstName + " " + item?.doctor?.lastName}
                  </span>
                  <span className="job">
                    {item?.doctor?.designation === null
                      ? item?.doctor?.specialization
                      : item?.doctor?.designation}
                  </span>
                  <p className="form-text">
                    {item?.doctor?.degree} {item?.doctor?.degree ? "," : ""}{" "}
                    {item?.doctor?.college}
                  </p>
                </div>

                <div className="actionBtn">
                  <NavLink to={`/doctors/profile/${item?.doctor?.id}`}>
                    View Profile
                  </NavLink>
                  <NavLink to={`/booking/${item?.doctor?.id}`}>
                    Book Now
                  </NavLink>
                </div>

                {/* <div className="w-100 d-flex align-items-center justify-content-center">
                  <StarRatings
                    rating={5}
                    starRatedColor="#ffba22"
                    numberOfStars={5}
                    name="rating"
                    className="star"
                    starDimension="20px"
                    starSpacing="5px"
                  />
                  <span className="d-inline-block text-secondary mt-2">
                    ()
                  </span>
                </div> */}
              </div>
            </div>
          ))}
      </>
    );
  return (
    <DashboardLayout>
      <h5 className="text-title mb-2 mt-3">My Favorite Doctors</h5>
      <div className="row">
        {content}
      </div>
    </DashboardLayout>
  );
};

export default PatientFavouriteDoctor;

