import React from 'react';
import { Link } from 'react-router-dom';

const UserList = (props) => {
  return (
    <tr>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>{props.type}</td>
      <td>{props.active}</td>
      <td>
        <Link to={`/admin/editUser/${props.id}`}>
        <button className="btn btn-info" style={{ margin: '3px' }} onClick={()=>props.fetchUser(props.id)}>
          Edit
        </button>
        </Link>

        <button className="btn - btn-warning" style={{ margin: '3px' }} onClick={()=>props.blockUser(props.id)}>
          Block
        </button>

        <button className="btn - btn-danger" style={{ margin: '3px' }} onClick={()=>props.deleteUser(props.id)}>
          Delete
        </button>

        <Link to={`/admin/viewDetails/${props.id}`}>
        <button className="btn - btn-danger" style={{ margin: '3px',backgroundColor:"#7DCEA0",border:'none' }}>
          View Details
        </button>
        </Link>
      </td>
    </tr>
  );
};

export default UserList;
