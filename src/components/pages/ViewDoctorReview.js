import React, { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
import ReviewList from './ReviewList';
import classes from './TableCommon.module.css'

const ViewDoctorReview = () => {
  const { isLoading, sendRequest } = useHttp();
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    sendRequest({ url: 'http://localhost:8000/api/doctor' }, setReview);
  }, [sendRequest]);

  return (
    <>
    {isLoading && <div className={classes.loader}></div>}
      {! isLoading && <table
        className={classes.tables}
        style={{ marginTop: '200px', minWidth: '50%', marginLeft: '400px' }}
      >
        <thead>
          <th>Name</th>
          <th>Review</th>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <ReviewList
              key={review.map}
              name={review.name}
              message={review.message}
            />
          ))}
        </tbody>
      </table>}
    </>
  );
};

export default ViewDoctorReview;
