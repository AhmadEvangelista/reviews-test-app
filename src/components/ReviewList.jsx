import React from 'react';
import './ReviewList.css';

const ReviewList = ({ data }) => {
  return (
    <div className='ListContainer'>
      {data &&
        data.map((reviews, index) => {
          const { fullName, email, rating, review } = reviews;
          return (
            <div key={index} className='List'>
              <h5>Name: {fullName}</h5>
              <h5>Email: {email}</h5>
              <h5>Rating: {rating}</h5>
              <h5>Review:</h5>
              <h5>{review}</h5>
            </div>
          );
        })}
    </div>
  );
};

export default ReviewList;
