import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/user-context';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const DeleteUser = () => {
  const utx = useContext(UserContext);
  const params = useParams();

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Are You Sure?</Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Link to="/admin/viewUserList">
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger" onClick={() => utx.onDeleteUser(params.id)} >
            Delete
          </Button>
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default DeleteUser;
