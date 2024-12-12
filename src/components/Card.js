import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ review }) => {
    return (
        <div className="bg-[#FFFFFF] relative shadow-xl rounded-lg p-[32px] max-w-lg mx-auto flex flex-col items-center   md:items-start">
            <div className="relative mb-4 flex-shrink-0 flex gap-3 md:flex-wrap">
                <img
                    className=" rounded-full w-23 h-24 object-cover"
                    src={review.image}
                    alt={`${review.name}'s profile`}
                />
                <div className=" md:text-left mt-4">
                <h3 className="text-[#000000] text-[18px] font-bold p-0 pb-[4.8px]">
                    {review.name}
                </h3>
                <p className="text-[#cc0201] text-[16px] font-poppins font-bold uppercase">
                    {review.job}
                </p>
            </div>
            </div>

            

            
            <div className="mt-3 text-[#868FA1] text-[16px] font-poppins  md:text-left w-full overflow-hidden text-ellipsis" style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
        }}>
                <p>"{review.text}"</p>
            </div>

            <div className="flex justify-center text-[#cc0221] text-[20px] font-poppins text-sm md:justify-start mt-4 w-full">
                {[...Array(5)].map((_, index) => (
                    <FaStar key={index} size={17} />
                ))}
            </div>
        </div>
    );
};

export default Card;
