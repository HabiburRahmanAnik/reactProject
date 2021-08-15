import React from 'react';
import './dass.css';
import UserList from './UserList';

const ViewUserList = (props) => {
    return (
        <div>
            <table className ='tables' style={{marginTop:'150px'}}>
                
               <thead>
               <th>Username</th>
					<th>Email</th>
					<th>Type</th>
                    <th>Active</th>
					<th>Action</th>
               </thead>
                
               <tbody>
                    {props.userlist.map((user)=>(
                        <UserList key={user.id} id={user.id} username={user.username} email={user.email} type={user.type} active = {user.active} deleteUser ={props.deleteCallBack} blockUser ={props.blockUser} fetchUser={props.fetchUser}/>
                    ))}
               </tbody>
            </table>
        </div>
    )
}

export default ViewUserList;

