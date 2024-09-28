import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./MyBookings.css";

function MyBookings() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [orders, setOrders] = useState("");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  // let order = localStorage.getItem("order");
  let clickHandler=() =>{
    localStorage.removeItem('order')
    setOrders(null);
  }
  let order = JSON.parse(localStorage.getItem('order'));
  console.log("orders", order);
//   let {nameF, peopleF, dateF,timeF} =  order;
//  setOrders({nameF,peopleF,timeF,dateF});
//  console.log("orders", orders);
return (
  <> 
   <div>
   {order ? 
     <table className="table">
       <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">Name</th>
           <th scope="col">No. of People</th>
           <th scope="col">Date</th>
           <th scope="col">Time</th>
           <th scope="col">Cancel</th>
         </tr>
       </thead>
       <tbody>
     {/* {order && Object.keys(order).map((key, index) => (           */}
       <tr>
        <th scope="row">{1}</th>
        <td> {order.name}</td>
        <td> {order.people}</td>
        <td> {order.date}</td>
        <td> {order.time}</td>
        <td> <button className="cancel-button" type="submit" onClick={clickHandler}>Cancel</button></td>
       </tr>
              {/* ))} */}
       </tbody>
     </table> : <p className="no-booking">No Bookings yet</p>
   }
   </div>

  </>
  
);
     
}

export default MyBookings;
