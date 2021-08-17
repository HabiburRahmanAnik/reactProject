import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';

const RoomBookingForm = (props) => {
    const history = useHistory();
    const [enteredRoomNumber, setEnteredRoomNumber] = useState(props.roomNo);
    const [type, setType] = useState(props.type);
    const [price, setPrice] = useState(props.price);
    const [patientName, setPatientName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const {sendRequest} = useHttp();

    const roomHandler = (e)=>{
        setEnteredRoomNumber(e.target.value);
    }

    const typeHandler = (e)=>{
        setType(e.target.value);
    }

    const priceHandler =(e)=>{
        setPrice(e.target.value);
    }

    const patientNameHandler = (e) =>{
        setPatientName(e.target.value);
    }

    const phoneHandler = (e)=>{
        setPhoneNo(e.target.value);
    }

    const roomBooking = (roomData)=>{
        const rooms = (data) => {
            console.log(data);
        };
    
        sendRequest(
          {
            url: `http://localhost:8000/api/book`,
            method: 'POST',
            body: roomData,
            headers: {
              'Content-Type': 'application/json',
            },
          },rooms);
      }

    const submitHandler =(e)=>{
        e.preventDefault();

        const roomData = {
            roomNo:enteredRoomNumber,
            type:type,
            price:price,
            patientName:patientName,
            phone:phoneNo,
        }

        roomBooking(roomData)

        history.push('/admin/patientRoom')

    }


    return (
        <>
        <div className="row-right">
        <h1 id="user">Booking Room</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="roomNo">Room No</label>
          <input
            id="username"
            type="text"
            value={enteredRoomNumber}
            onChange={roomHandler}
          />
          <label htmlFor="type">Tyep</label>
          <input
            id="email"
            type="text"
            value={type}
            onChange={typeHandler}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="salary"
            value={price}
            onChange={priceHandler}
          />
          <br />
          <label htmlFor="patientName">Patient Name</label>
          <input type="text" id="password" value={patientName} onChange={patientNameHandler}/><br />
          <label htmlFor="phone">Phone No</label>
          <input type="text" id="select" value={phoneNo} onChange={phoneHandler}/>
          
          <button id="add_button" type="submit">
            Booking
          </button>
        </form>
      </div>
    </>
    )
}

export default RoomBookingForm
