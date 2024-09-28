import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Reserve.css";

function Reserve() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  let order = localStorage.getItem("order");
  let reserve = localStorage.getItem("reserve");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [timeError, setTimeError] = useState(false);
  const [dish, setDish] = useState("");
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  let today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  const date2 = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  // function getTime() {
  //   const date = new Date();
  //   return date.toLocaleString("en-GB").split(" ")[1];
  // }
  // const minTime = getTime();
  // console.log(minTime);
  //new time code

  const minTime = "10:00";
  const maxTime = "20:00";

  //new time func end here
  let regEx = new RegExp(/^[6-9]\d{9}$/gim);
  let clickHandler = async () => {
    console.log(phone, !regEx.test(phone));
    if (
      validateTime({
        target: {
          value: currentTime,
        },
      })
    ) {
      // setError(true);
      // setTime("");
      return;
    }
    if (phone && !regEx.test(phone)) {
      setPhone("");
    }
    if (!name || !phone || !date || !time || !dish || !people) {
      setError(true);
      return false;
    }

    console.log(`${name} ${phone} ${people} ${email} ${date} ${time} ${dish}`);
    let result = await fetch("http://localhost:5000/reserve", {
      method: "post",
      body: JSON.stringify({ name, email, date, time, people, dish, phone }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("order", JSON.stringify(result));
    localStorage.setItem("reserve", "Reserved");
    // navigate("/updates");

    alert("Congratulations ,You reserved the table");
    //this.resetForm();
    navigate("/");
  };

  /* delete */
  let clickHandler1 = async () => {
    let id = JSON.parse(order)._id;
    console.log(id);

    let result = await fetch(`http://localhost:5000/order/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      alert("Your table is cancelled!");
      localStorage.setItem("reserve", "Reserve");
      navigate("/");
      localStorage.removeItem("order");
    }
  };

  let validateTime = (e) => {
    // setCurrentTime(e.target.value);
    // const selectedTime = e.target.value+':00';
    // const currentTime = new Date().toLocaleString("en-GB").split(" ")[1];
    // const isTimeEarlier = selectedTime < currentTime;
    // if(isTimeEarlier){
    //   setTimeError(true);
    //  } else {
    //   setTimeError(false);
    //  }
    // console.log(e, e.target.value+':00', new Date().toLocaleString("en-GB").split(" ")[1], isTimeEarlier);
    // setTime(e.target.value);
    // return isTimeEarlier;

    setCurrentTime(e.target.value);
    const selectedTime = e.target.value + ":00";
    const isTimeEarlier = selectedTime < minTime || selectedTime > maxTime;

    if (isTimeEarlier) {
      setTimeError(true);
    } else {
      setTimeError(false);
    }
    console.log(e, e.target.value + ":00", minTime, maxTime, isTimeEarlier);
    setTime(e.target.value);
    return isTimeEarlier;
  };

  /* update */

  return (
    <div>
      <br />
      <br />
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h3 data-aos="fade-right">Book Your Table!</h3>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              style={{ textAlign: "right" }}
              data-aos="fade-up"
            >
              {/* <button className="btn cancel-btn" onClick={clickHandler1}>
                Cancel Booking
              </button> */}
            </div>
          </div>
        </div>
        <div className="col-12 cancel"></div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col messageBox reserve-text" data-aos="fade-up">
              <form
                className="row g-3 border p-3"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* name */}
                <div className="col-md-4">
                  <label htmlFor="validationDefault01" className="form-label">
                    Your name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {error && !name && (
                    <span
                      id="emailHelp"
                      className="form-text"
                      style={{ color: "red", fontSize: "15px" }}
                    >
                      Please enter a valid name
                    </span>
                  )}
                </div>
                {/* phone number */}
                <div className="col-md-4">
                  <label htmlFor="validationDefault02" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault02"
                    placeholder="9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {error && !phone && (
                    <span
                      id="emailHelp"
                      className="form-text"
                      style={{ color: "red", fontSize: "15px" }}
                    >
                      Enter Valid Phone Number
                    </span>
                  )}
                </div>
                {/* email */}
                <div className="col-md-4">
                  <label
                    htmlFor="validationDefaultUsername"
                    className="form-label"
                  >
                    Email Address
                  </label>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      id="validationDefaultUsername"
                      aria-describedby="inputGroupPrepend2"
                      placeholder="abc12@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                {/* people */}
                <div className="col-md-4">
                  <label htmlFor="validationDefault01" className="form-label">
                    No Of People
                  </label>
                  <input
                    min="1"
                    max="10"
                    type="number"
                    className="form-control"
                    id="validationDefault01"
                    placeholder="2"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                  />
                  {error && !people && (
                    <span
                      id="emailHelp"
                      className="form-text"
                      style={{ color: "red", fontSize: "15px" }}
                    >
                      Please enter valid No. of people{" "}
                    </span>
                  )}
                </div>
                {/* date */}
                <div className="col-md-4">
                  <label htmlFor="validationDefault02" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="validationDefault02"
                    placeholder="20-Aug-2023"
                    value={date}
                    min={today}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  {error && !date && (
                    <span
                      id="emailHelp"
                      className="form-text"
                      style={{ color: "red", fontSize: "15px" }}
                    >
                      Please enter date
                    </span>
                  )}
                </div>
                {/* Time */}
                <div className="col-md-4">
                  <label
                    htmlFor="validationDefaultUsername"
                    className="form-label"
                  >
                    Time
                  </label>
                  <div className="input-group">
                    <input
                      id="appt-time"
                      type="time"
                      name="appt-time"
                      required
                      className={`form-control ${
                        timeError ? "is-invalid" : ""
                      }`}
                      aria-describedby="inputGroupPrepend2"
                      placeholder="10A.M"
                      value={time}
                      min="10:00"
                      max="20:00"
                      onChange={(e) => {
                        validateTime(e);
                      }}
                    />
                  </div>
                  {((error && !time) || timeError) && (
                    <span
                      id="emailHelp"
                      className="form-text"
                      style={{ color: "red", fontSize: "15px" }}
                    >
                      Please enter valid time
                    </span>
                  )}
                </div>
                {/* request */}
                <textarea
                  name=""
                  id=""
                  cols="100"
                  rows="4"
                  placeholder="Your Prefered Menu Items"
                  value={dish}
                  onChange={(e) => setDish(e.target.value)}
                ></textarea>
                {error && !dish && (
                  <span
                    id="emailHelp"
                    className="form-text"
                    style={{ color: "red", fontSize: "15px" }}
                  >
                    Enter Menu Items
                  </span>
                )}
                <div className="col-12">
                  <button
                    className="btn reserve-btn"
                    type="submit"
                    onClick={clickHandler}
                  >
                    Reserve
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}

export default Reserve;
