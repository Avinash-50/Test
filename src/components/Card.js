import React from 'react';
import { FaStar } from 'react-icons/fa'; 

const Card = ({ review }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto flex flex-col items-center md:items-start">
            <div className="relative mb-4 flex-shrink-0">
                <img
                    className="rounded-full w-32 h-32 object-cover"
                    src={review.image}
                    alt={`${review.name}'s profile`}
                />
            </div>

            <div className="text-center md:text-left mb-4">
                <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
                <p className="text-sm text-[#cc0221] uppercase">{review.job}</p>
            </div>

            <div className="mt-3 text-center md:text-left text-gray-600 italic w-full">
                <p>"{review.text}"</p>
            </div>

            <div className="flex justify-center md:justify-start mt-4 text-[#cc0221] w-full">
                {[...Array(5)].map((_, index) => (
                    <FaStar key={index} size={17} />
                ))}
            </div>
        </div>
    );
};

export default Card;
