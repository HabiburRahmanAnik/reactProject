import React, { useEffect, useState } from 'react';
import RoomBookingForm from './RoomBookingForm';
import { useParams } from 'react-router-dom';
import useHttp from '../hooks/use-http';

const RoomBooking = (props) => {
  const [room, setRoom] = useState([]);
  const params = useParams();
  const id = params.id;
  const { sendRequest } = useHttp();

  useEffect(() => {
    const rooms = (data) => {
      setRoom(data);
    };
    sendRequest({ url: `http://localhost:8000/api/checkroom/${id}` }, rooms);
  }, [sendRequest, id]);

  return (
    <>
      {room.map((r) => (
        <RoomBookingForm
          key={r.id}
          roomNo={r.roomNo}
          type={r.roomType}
          status={r.status}
          price={r.price}
          
        />
      ))}
    </>
  );
};

export default RoomBooking;
