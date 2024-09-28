import React from "react";
import { Link } from "react-router-dom";
import './AdminDashboard.css'

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/admin/tables">Manage Tables</Link>
        </li>
        <li>
          <Link to="/admin/bookings">Manage Bookings</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminDashboard;