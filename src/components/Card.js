import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Card.css';

const Card = ({ review }) => {
  return (
    <div className="bg-[#FFFFFF] relative shadow-xl rounded-lg p-[32px] max-w-lg mx-auto flex flex-col items-start">
      
      <div className="image-text-container mb-4 flex flex-col md:flex-row gap-3 w-full pl-4">
        
        <img
          className="rounded-full w-24 h-24 object-cover"
          src={review.image}
          alt={`${review.name}'s profile`}
        />

        
        <div className="text-content mt-4 md:mt-0 w-full">
          <h3 className="text-[#000000] text-[16px] font-bold p-0 pb-[4.8px] text-left">
            {review.name}
          </h3>
          <p className="text-[#cc0201] text-[16px] font-poppins font-bold uppercase text-left">
            {review.job}
          </p>
        </div>
      </div>

      
      <div className="mt-2 text-[#868FA1] text-[16px] font-poppins w-full px-4 md:px-6 text-left">
        <p>"{review.text}"</p>
      </div>

      
      <div className="flex justify-start text-[#cc0221] text-[20px] font-poppins text-xl mt-4 w-full pl-4 md:pl-6">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} size={13} />
        ))}
      </div>
    </div>
  );
};

export default Card;
