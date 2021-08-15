import React from 'react';

const DetailsPage = ({ name, username, email ,blood,phone,address,type,active}) => {
  return (
    <>
      <tr>
        <td>Name</td>
        <td>{name}</td>
      </tr>
      <tr>
        <td>Username</td>
        <td>{username}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{email}</td>
      </tr>
      <tr>
        <td>Type</td>
        <td>{type}</td>
      </tr>
      <tr>
        <td>Active</td>
        <td>{active}</td>
      </tr>
      <tr>
        <td>Phone</td>
        <td>{phone}</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>{address}</td>
      </tr>
      <tr>
        <td>Blood Group</td>
        <td>{blood}</td>
      </tr>
    </>
  );
};

export default DetailsPage;
