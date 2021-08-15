import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';


const UpdateSalaryForm = (props) => {
    const history = useHistory();
    const [username,setUsername ] = useState(props.username);
    const [email, setEmail] = useState(props.email);
    const [currentSalary, setCurrentSalary] = useState(props.currentSalary);
    const [updateSalary, setUpdateSalary] = useState('');

    const usernameHandler = (e)=>{
        setUsername(e.target.value);
    }

    const emailHandler = (e)=>{
        setEmail(e.target.value);
    }

    const currentSalaryHandler =(e)=>{
        setCurrentSalary(e.target.value);
    }

    const updateSalaryHandler = (e) =>{
        setUpdateSalary(e.target.value);
    }

    const submitHandler =(e)=>{
        e.preventDefault();

        const data= {
            updateSalary:updateSalary,
        }

        props.updateSalary(data);
        history.push('/admin/manageSalary')
    }


    return (
        <>
        <div className="row-right" style={{height:'520px'}}>
        <h1 id="user">Update Salary</h1>
        <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameHandler}
          />
          <label htmlFor="username">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={emailHandler}
          />
          <label htmlFor="salary">Current Salary</label>
          <input
            type="text"
            id="salary"
            value={currentSalary}
            onChange={currentSalaryHandler}
          />
          <label htmlFor="salary">Update Salary</label>
          <input
            type="text"
            id="salary"
            value={updateSalary}
            onChange={updateSalaryHandler}
          />
          <br />
          
          <button id="add_button" type="submit">
            Save
          </button>
        </form>
      </div>
    </>
    )
}

export default UpdateSalaryForm;
