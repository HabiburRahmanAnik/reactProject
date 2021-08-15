import React from 'react';
import { Link } from 'react-router-dom';

const RoomList = ({id,roomNo,status,price,roomType}) => {
  return (
    <tr>
      <td>{roomNo}</td>
      <td>{roomType}</td>
      <td>{status}</td>
      <td>{price}</td>
      <td>
        <Link to={`/admin/patientRoom/${id}`}>
        <button className="btn btn-warning">Booking</button>
        </Link>
      </td>
    </tr>
  );
};

export default RoomList;
