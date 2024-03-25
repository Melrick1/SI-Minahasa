import React, { useState, useEffect } from 'react';
import './StarRating.css'

const StarRating = ({ initialRating, onRatingChange }) => {
    const [rating, setRating] = useState(initialRating);

    useEffect(() => { // Set initial rating
        setRating(initialRating)
    }, [initialRating]);

    const handleStarClick = async (selectedRating) => {
        // If the clicked star is already selected, deselect all stars
        if (selectedRating === rating) {
            setRating(0);
        } 
        else {
            setRating(selectedRating);
        }
    };

    useEffect(() => {
        onRatingChange(rating)
    }, [rating]);

    return (
        <div className='star-rating-container'>
            <p>Berikan Rating :</p>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                key={star}
                onClick={() => handleStarClick(star)}
                className={star <= rating ? 'star selected' : 'star unselected'}
                >
                    <i className="bi bi-star-fill"></i>
                </span>
            ))}
        </div>
    );
};

export default StarRating;