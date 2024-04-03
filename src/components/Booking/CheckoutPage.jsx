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

  const gst = (5 / 100) * Number(price);
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Payment Section */}
        <div className="col-md-7">
          <div className="rounded p-3 payment-section">
            <div className="row">
              <div className="col-md-6 mb-2 mb-4">
                <label className="payment-radio credit-card-option">
                  <input
                    type="radio"
                    name="paymentType"
                    value="creditCard"
                    style={{ accentColor: "var(--primaryColor)" }}
                    onChange={(e) => handleChange(e)}
                    checked={paymentType === "creditCard"}
                  />
                  <span className="ms-2"></span>
                  Credit card
                </label>
              </div>
              <div className="col-md-6 mb-2 mb-4 align-content-end d-flex justify-content-end">
                <label className="payment-radio credit-card-option">
                  <input
                    type="radio"
                    name="paymentType"
                    value="cash"
                    style={{ accentColor: "var(--primaryColor)" }}
                    onChange={(e) => handleChange(e)}
                    checked={paymentType === "cash"}
                  />
                  <span className="ms-2"></span>
                  Cash
                </label>
              </div>

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
                    id="card_name"
                    value={nameOnCard && nameOnCard}
                    type="text"
                    onChange={(e) => handleChange(e)}
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
                    onChange={(e) => handleChange(e)}
                    name="cardNumber"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group card-label mb-3">
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
                    id="cvv"
                    type="number"
                    value={cvv && cvv}
                    onChange={(e) => handleChange(e)}
                    placeholder="XXX"
                    name="cvv"
                  />
                </div>
              </div>
            </div>

            <div className="d-flex gap-2 mt-3 mb-3 align-items-center justify-content-between">
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  style={{ accentColor: "var(--primaryColor)" }}
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
                <input
                  type="checkbox"
                  id="terms_accept"
                  className="me-2"
                  checked={isCheck}
                  style={{ color: "red" }}
                  onChange={handleCheck}
                />
                <label htmlFor="terms_accept">
                  {" "}
                  I have read and accept{" "}
                  <a
                    href="#"
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "var(--primaryColor)",
                    }}
                  >
                    Terms & Conditions
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Section */}
        <div className="col-md-5 col-sm-12">
          <div className="rounded p-3 invoice-section">
            {data && (
              <Link
                to={`/doctors/profile/${data?.id}`}
                className="booking-doc-img d-flex justify-content-center mb-2"
              >
                <img src={data?.img === null ? img : data?.img} alt="" />
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
