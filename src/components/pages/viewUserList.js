import React from 'react';
import './dass.css';
import UserList from './UserList';

const ViewUserList = (props) => {
    // const [users, setUsers] = useState([]);
    // const { sendRequest: fetchRequest } = useHttp();

    // const transformUser = (userData) => {
    //     setUsers(userData);
    //   };
    
    //   useEffect(() => {
    //     fetchRequest({ url: 'http://localhost:8000/api/list' }, transformUser);
    //   }, [fetchRequest]);

    // const deleteUser = (id) => {
    //     fetchRequest(
    //       { url: `http://localhost:8000/api/delete/${id}` },
    //       transformUser
    //     );
    //   };
    
    //   const blockUser = (id) => {
    //     fetchRequest(
    //       { url: `http://localhost:8000/api/block/${id}`, method: 'POST' },
    //       transformUser
    //     );
    //   };
    
    //   const [user, setUser] = useState([]);
    
    //   const fetchUser = (id) => {
    //     const transformUser = (userData) => {
    //       setUser(userData);
    //     };
    //     fetchRequest(
    //       { url: `http://localhost:8000/api/userlist/${id}` },
    //       transformUser
    //     );
    //   };
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

