import React, { useState } from 'react';
import './StarRating.css'

const StarRating = ({ initialRating, onRatingChange }) => {
    const [rating, setRating] = useState(initialRating);

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
        if (onRatingChange) {
            onRatingChange(selectedRating);
        }
    };

    return (
        <div className='star-rating-container'>
            <p>Berikan Rating :</p>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                key={star}
                onClick={() => handleStarClick(star)}
                className={star <= rating ? 'star selected' : 'star unselected'}
                >
                    &#9733; {/* Unicode character for a solid star */}
                </span>
            ))}
        </div>
    );
};

export default StarRating;