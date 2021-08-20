import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/user-context';

const UserList = (props) => {
  const utx = useContext(UserContext);
  return (
    <tr>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>{props.type}</td>
      <td>{props.active}</td>
      <td>
        <Link to={`/admin/editUser/${props.id}`}>
        <button className="btn btn-info" style={{ margin: '3px' }} >
          Edit
        </button>
        </Link>

        <button className="btn - btn-warning" style={{ margin: '3px' }} onClick={()=>utx.onBlockUser(props.id)}>
          Block
        </button>

        <Link to={`/admin/deleteUser/${props.id}`}>
        <button className="btn - btn-danger" style={{ margin: '3px' }} >
          Delete
        </button>
        </Link>

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
