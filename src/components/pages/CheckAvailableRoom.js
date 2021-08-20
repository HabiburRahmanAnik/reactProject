import React, { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
import RoomList from './RoomList';

const CheckAvailableRoom = () => {
  const { isLoading, sendRequest } = useHttp();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const checkRoom = (data) => {
      setRooms(data);
    };
    sendRequest({ url: 'http://localhost:8000/api/checkroom' }, checkRoom);
  }, [sendRequest]);

  return (
    <>
    {isLoading && <div className="loader"></div>}
      {!isLoading && <table className="tables" style={{ marginTop: '150px', minWidth: '65%' }}>
        <thead style={{ backgroundColor: 'white' }}>
          <th>Room No</th>
          <th>Type</th>
          <th>Status</th>
          <th>Price(tk)</th>
          <th>Action</th>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <RoomList
              key={room.id}
              id={room.id}
              roomNo={room.roomNo}
              price={room.price}
              status={room.status}
              roomType={room.roomType}
            />
          ))}
        </tbody>
      </table>}
    </>
  );
};

export default CheckAvailableRoom;
