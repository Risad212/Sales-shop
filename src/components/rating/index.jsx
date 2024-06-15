import React from 'react';

const Rating = ({ stars }) => {
  let starIcon;
  const ratingStars = Array.from({ length: 5 }, (elem, index) => {
    starIcon = <i className="fa-solid fa-star"></i>;
    return (
      <span key={index} className="me-1" style={{color: 'gold'}}>
        {starIcon}
      </span>
    );
  });

  return (
    <>
      <div className='flex'>
         {ratingStars}
      </div>
    </>
  );
};

export default Rating;
