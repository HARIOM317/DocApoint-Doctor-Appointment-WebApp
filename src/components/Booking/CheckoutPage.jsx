import moment from "moment";
import img from "../../images/doc/doctor 3.jpg";
import { Link } from "react-router-dom";
import "../../stylesheets/bookingStylesheets/BookingCheckout.css";

const CheckoutPage = ({
  handleChange,
  selectValue,
  isCheck,
  setIsChecked,
  data,
  selectedDate,
  selectTime,
}) => {
  const {
    nameOnCard,
    cardNumber,
    expiredMonth,
    cardExpiredYear,
    cvv,
    paymentType,
    paymentMethod,
  } = selectValue;
  const handleCheck = () => {
    setIsChecked(!isCheck);
  };

  let price = data?.price ? data.price : 60;

<<<<<<< HEAD
  const vat = (15 / 100) * Number(price);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <div className="rounded p-3" style={{ background: "#f8f9fa" }}>
            <div className="row">
              <div className="col-md-6 mb-2">
=======
  const gst = (5 / 100) * Number(price);
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Payment Section */}
        <div className="col-md-7">
          <div className="rounded p-3 payment-section">
            <div className="row">
              <div className="col-md-6 mb-2 mb-4">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                <label className="payment-radio credit-card-option">
                  <input
                    type="radio"
                    name="paymentType"
                    value="creditCard"
<<<<<<< HEAD
=======
                    style={{ accentColor: "var(--primaryColor)" }}
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                    onChange={(e) => handleChange(e)}
                    checked={paymentType === "creditCard"}
                  />
                  <span className="ms-2"></span>
                  Credit card
                </label>
              </div>
<<<<<<< HEAD
              <div className="col-md-6 mb-2">
=======
              <div className="col-md-6 mb-2 mb-4 align-content-end d-flex justify-content-end">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                <label className="payment-radio credit-card-option">
                  <input
                    type="radio"
                    name="paymentType"
                    value="cash"
<<<<<<< HEAD
=======
                    style={{ accentColor: "var(--primaryColor)" }}
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                    onChange={(e) => handleChange(e)}
                    checked={paymentType === "cash"}
                  />
                  <span className="ms-2"></span>
                  Cash
                </label>
              </div>
<<<<<<< HEAD
              <di mb-3v className="col-md-6">
                <div className="form-group card-label mb-3">
                  <label htmlFor="card_name">Name on Card</label>
                  <input
                    className="form-control"
=======

              <div mb-3v className="col-md-6">
                <div className="form-group card-label mb-3">
                  <label
                    htmlFor="card_name"
                    style={{
                      background: "var(--bgLight)",
                    }}
                  >
                    Name on Card
                  </label>
                  <input
                    className="input-field-style"
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                    id="card_name"
                    value={nameOnCard && nameOnCard}
                    type="text"
                    onChange={(e) => handleChange(e)}
<<<<<<< HEAD
                    name="nameOnCard"
                  />
                </div>
              </di>
              <div className="col-md-6">
                <div className="form-group card-label mb-3">
                  <label htmlFor="card_number">Card Number</label>
                  <input
                    className="form-control"
                    id="card_number"
                    value={cardNumber && cardNumber}
                    placeholder="1234  5678  9876  5432"
                    type="number"
=======
                    placeholder="e.g. Prince"
                    name="nameOnCard"
                    style={{ boxShadow: "none !important" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group card-label mb-3">
                  <label
                    htmlFor="card_number"
                    style={{
                      background: "var(--bgLight)",
                    }}
                  >
                    Card Number
                  </label>
                  <input
                    className="input-field-style"
                    id="card_number"
                    value={cardNumber && cardNumber}
                    placeholder="1234  5678  9876  5432"
                    type="text"
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                    onChange={(e) => handleChange(e)}
                    name="cardNumber"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group card-label mb-3">
<<<<<<< HEAD
                  <label htmlFor="expiry_month">Expiry Month</label>
                  <input
                    className="form-control"
=======
                  <label
                    htmlFor="expiry_month"
                    style={{
                      background: "var(--bgLight)",
                    }}
                  >
                    Expiry Month
                  </label>
                  <input
                    className="input-field-style"
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                    id="expiry_month"
                    value={expiredMonth && expiredMonth}
                    placeholder="MM"
                    type="number"
                    onChange={(e) => handleChange(e)}
                    name="expiredMonth"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group card-label mb-3">
<<<<<<< HEAD
                  <label htmlFor="expiry_year">Expiry Year</label>
                  <input
                    className="form-control"
=======
                  <label
                    htmlFor="expiry_year"
                    style={{
                      background: "var(--bgLight)",
                    }}
                  >
                    Expiry Year
                  </label>
                  <input
                    className="input-field-style"
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                    id="expiry_year"
                    value={cardExpiredYear && cardExpiredYear}
                    placeholder="YY"
                    type="number"
                    onChange={(e) => handleChange(e)}
                    name="cardExpiredYear"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group card-label mb-3">
<<<<<<< HEAD
                  <label htmlFor="cvv">CVV</label>
                  <input
                    className="form-control"
=======
                  <label
                    htmlFor="cvv"
                    style={{
                      background: "var(--bgLight)",
                    }}
                  >
                    CVV
                  </label>
                  <input
                    className="input-field-style"
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                    id="cvv"
                    type="number"
                    value={cvv && cvv}
                    onChange={(e) => handleChange(e)}
<<<<<<< HEAD
=======
                    placeholder="XXX"
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                    name="cvv"
                  />
                </div>
              </div>
            </div>

<<<<<<< HEAD
            <div className="d-flex gap-2 mt-3 mb-3">
=======
            <div className="d-flex gap-2 mt-3 mb-3 align-items-center justify-content-between">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
<<<<<<< HEAD
=======
                  style={{ accentColor: "var(--primaryColor)" }}
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                  value="paypal"
                  onChange={(e) => handleChange(e)}
                  checked={paymentMethod === "paypal"}
                />
                <span className="checkmark ms-3"></span>
                Paypal
              </div>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
<<<<<<< HEAD
                  value="payoneer"
                  onChange={(e) => handleChange(e)}
                  checked={paymentMethod === "payoneer"}
                />
                <span className="checkmark ms-3"></span>
                Payoneer
              </div>
            </div>
            <div className="terms-accept">
              <div className="custom-checkbox">
=======
                  value="masterCard"
                  style={{ accentColor: "var(--primaryColor)" }}
                  onChange={(e) => handleChange(e)}
                  checked={paymentMethod === "masterCard"}
                />
                <span className="checkmark ms-3"></span>
                Master Card
              </div>

              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="rupay"
                  style={{ accentColor: "var(--primaryColor)" }}
                  onChange={(e) => handleChange(e)}
                  checked={paymentMethod === "rupay"}
                />
                <span className="checkmark ms-3"></span>
                Rupay
              </div>
            </div>
            <div className="terms-accept">
              <div style={{ marginTop: "2rem" }}>
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                <input
                  type="checkbox"
                  id="terms_accept"
                  className="me-2"
                  checked={isCheck}
<<<<<<< HEAD
=======
                  style={{ color: "red" }}
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                  onChange={handleCheck}
                />
                <label htmlFor="terms_accept">
                  {" "}
                  I have read and accept{" "}
                  <a
<<<<<<< HEAD
                    className="text-primary"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    Terms &amp; Conditions
=======
                    href="#"
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "var(--primaryColor)",
                    }}
                  >
                    Terms & Conditions
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="col-md-5 col-sm-12">
          <div className="rounded p-3" style={{ background: "#f8f9fa" }}>
=======
        {/* Invoice Section */}
        <div className="col-md-5 col-sm-12">
          <div className="rounded p-3 invoice-section">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
            {data && (
              <Link
                to={`/doctors/profile/${data?.id}`}
                className="booking-doc-img d-flex justify-content-center mb-2"
              >
<<<<<<< HEAD
                <img src={img} alt="" />
=======
                <img src={data?.img === null ? img : data?.img} alt="" />
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
              </Link>
            )}
            {data && (
              <div className="doc-title-info mt-3 mb-3">
                <h5
                  className="mt-3 text-center"
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  Dr. {data?.firstName + " " + data?.lastName}
                </h5>
                <div className="text-center">
                  <p className="form-text mb-0">{data?.designation}</p>
                  <p className="form-text mb-0">{data?.clinicAddress}</p>
                </div>
              </div>
            )}

            <div className="booking-item-wrap">
              <ul className="booking-date">
                <li>
                  Date <span>{moment(selectedDate).format("LL")}</span>
                </li>
                <li>
                  Time <span>{selectTime}</span>
                </li>
              </ul>
              <ul className="booking-fee">
                <li>
<<<<<<< HEAD
                  Consulting Fee <span>${price}</span>
                </li>
                <li>
                  Booking Fee <span>$10</span>
                </li>
                <li>
                  Vat (Including 15%) <span>$ {vat}</span>
                </li>
              </ul>

              <ul className="booking-total">
                <li className="d-flex justify-content-between">
                  <span className="fw-bold">Total</span>
                  <span className="total-cost" style={{ color: "#1977cc" }}>
                    ${Number(price) + 10 + vat}
=======
                  Consulting Fee <span>Rs. {price}</span>
                </li>
                <li>
                  Platform Fee <span>Rs. 10</span>
                </li>
                <li>
                  GST (Including 5%) <span>Rs. {gst}</span>
                </li>
              </ul>

              <hr />

              <ul className="booking-total">
                <li className="d-flex justify-content-between">
                  <span
                    className="fw-bold"
                    style={{ color: "var(--headingColor)" }}
                  >
                    Total
                  </span>
                  <span
                    className="total-cost"
                    style={{ color: "var(--headingColor)" }}
                  >
                    Rs. {Number(price) + 10 + gst}
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
