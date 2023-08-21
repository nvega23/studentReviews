import React, { useState } from 'react';
import regularStarIcon from '../../images/blackStar.png';
import solidStarIcon from '../../images/goldStar.png';
import halfStar from '../../images/halfStar.png';
import halfGold from '../../images/halfGold.png';
import halfStarWhite from '../../images/whiteStar.png';
import goldOutline from '../../images/goldOutline.png';
import { FaStar } from 'react-icons/fa';
import './starReview.css';

const StarReview = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
        <div className='starApp'>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1
                return (
                    <label>
                        <input
                            type='radio'
                            name='rating'
                            value={currentRating}
                            onClick={()=> setRating(currentRating)}
                        />
                        <FaStar 
                            className="star" 
                            size={30}
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={()=> setHover(currentRating)}
                            onMouseLeave={()=> setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    </>
  )

};

export default StarReview;
