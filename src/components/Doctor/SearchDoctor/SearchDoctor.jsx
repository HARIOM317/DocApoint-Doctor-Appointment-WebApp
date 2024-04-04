import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import SearchContent from "./SearchContent";
import { useDebounced } from "../../../utils/hooks/useDebounced";
import { useGetDoctorsQuery } from "../../../redux/api/doctorApi";
import { Empty } from "antd";
import { Pagination, Select, Button, Slider } from "antd";
import Header from "../../Shared/Header/Header";
import SubHeader from "../../Shared/SubHeader";
import Search from "antd/es/input/Search";
import { FaSearch, FaRedoAlt } from "react-icons/fa";

import Lottie from "lottie-react";
import Loading from "../../../animations/loading.json";
import NoDataFound from "../../../animations/no_data_found.json";
import SomethingWrong from "../../../animations/something_wrong.json";


const SearchDoctor = () => {
  const query = {};
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState("Gender");
  const [sortByGender, setSorByGender] = useState("");
  const [specialization, setSpecialization] = useState("Specialization");
  const [specialist, setSpecialist] = useState("");
  const [priceRange, setPriceRange] = useState({});

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  sortByGender !== "" && (query["gender"] = sortByGender);
  specialist !== "" && (query["specialist"] = specialist);

  const priceDebounced = useDebounced({ searchQuery: priceRange, delay: 600 });
  const debounced = useDebounced({ searchQuery: searchTerm, delay: 600 });

  if (Object.keys(priceDebounced).length !== 0 && !!priceDebounced) {
    const { min, max } = priceDebounced;
    query["min"] = min;
    query["max"] = max;
  }

  const resetFilter = () => {
    setPage(1);
    setSize(10);
    setSortOrder("");
    setSearchTerm("");
    setSortOrder("");
    setSorByGender("");
    setSpecialist("");
    setPriceRange({});

    setGender("Gender");
    setSpecialization("Specialization");
  };

  if (!!debounced) {
    query.searchTerm = debounced;
  }

  const { data, isLoading, isError } = useGetDoctorsQuery({ ...query });
  const doctorsData = data?.doctors;
  const meta = data?.meta;

  //what to render
  let content = null;
  if (isLoading) content = (
    <>
      <div className=" m-0 p-0 d-flex align-items-center justify-content-center">
        <Lottie
          loop={true}
          animationData={Loading}
          style={{ width: "300px" }}
        />
      </div>
    </>
  );
  if (!isLoading && isError)
    content = (
      <div className="m-0 p-0 d-flex flex-column align-items-center justify-content-center">
        <Lottie
          loop={true}
          animationData={SomethingWrong}
          style={{ width: "300px" }}
        />
        <div
          style={{
            color: "var(--headingColor)",
            fontWeight: "bold",
            fontSize: "1.3rem",
          }}
        >
          Something went wrong!
        </div>
      </div>
    );
  if (!isLoading && !isError && doctorsData.length === 0)
    content = (
      <div className=" m-0 p-0 d-flex align-items-center justify-content-center">
        <Lottie
          loop={true}
          animationData={NoDataFound}
          style={{ width: "300px" }}
        />
      </div>
    );
  if (!isLoading && !isError && doctorsData.length > 0)
    content = (
      <>
        {doctorsData &&
          doctorsData?.map((item, id) => (
            <SearchContent key={id + item.id} data={item} />
          ))}
      </>
    );

  const onShowSizeChange = (current, pageSize) => {
    setPage(page);
    setSize(pageSize);
  };

  const onSearch = (value) => {
    setSearchTerm(value);
  };

  const onSelectGender = (value) => {
    setGender(value);
    setSorByGender(value);
  };

  const onSelectSpecialization = (value) => {
    setSpecialization(value);
    setSpecialist(value);
  };

  const onRangeChange = (range) => {
    const obj = {
      min: range[0],
      max: range[1],
    };
    setPriceRange(obj);
  };

  return (
    <div>
      <Header />
      <SubHeader title="Doctors" subtitle="Lorem ipsum dolor sit amet." />

      <div className="container" style={{ marginBottom: 80, marginTop: 80 }}>
        <div className="filter-bar">
          <div className="filter-group">
            <Select
              value={gender}
              style={{
                width: 120,
              }}
              onChange={onSelectGender}
              options={[
                {
                  value: "male",
                  label: "Male",
                },
                {
                  value: "female",
                  label: "Female",
                },
                {
                  value: "other",
                  label: "Other",
                },
              ]}
            />

            <Select
              value={specialization}
              style={{
                width: 200,
              }}
              onChange={onSelectSpecialization}
              options={[
                {
                  value: "Cardiologist",
                  label: "Cardiologist",
                },
                {
                  value: "Dermatologist",
                  label: "Dermatologist",
                },
                {
                  value: "Orthopedic Surgeon",
                  label: "Orthopedic Surgeon",
                },
                {
                  value: "Gynecologist",
                  label: "Gynecologist",
                },
                {
                  value: "Neurologist",
                  label: "Neurologist",
                },
                {
                  value: "Ophthalmologist",
                  label: "Ophthalmologist",
                },
                {
                  value: "Pediatrician",
                  label: "Pediatrician",
                },
                {
                  value: "Endocrinologist",
                  label: "Endocrinologist",
                },
                {
                  value: "Gastroenterologist",
                  label: "Gastroenterologist",
                },
                {
                  value: "Pulmonologist",
                  label: "Pulmonologist",
                },
                {
                  value: "Orthopedic",
                  label: "Orthopedic",
                },
              ]}
            />
          </div>

          <div className="filter-group">
            <Search
              placeholder="Search"
              onSearch={onSearch}
              enterButton
              allowClear
              className="search-bar"
            />

            {Object.keys(query).length > 4 && (
              <Button
                style={{ backgroundColor: "#ec1839" }}
                onClick={resetFilter}
                type="primary"
                shape="round"
                icon={<FaRedoAlt />}
                size="sm"
              >
                Reset
              </Button>
            )}
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-12">
              {content}
              <div className="text-center mt-5 mb-5">
                <Pagination
                  showSizeChanger
                  onShowSizeChange={onShowSizeChange}
                  total={meta?.total}
                  pageSize={size}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchDoctor;
