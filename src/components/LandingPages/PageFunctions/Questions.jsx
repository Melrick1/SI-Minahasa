import StarRating from './StarRating.jsx';
import { useState } from 'react';

const Question = () =>{
    const [rating, setRating] = useState(0);
    const [Comment, setComment] = useState('');

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    // Event handler for input change
    const commentChange = (event) => {
        setComment(event.target.value);
    };

    return(
        <div className="questionCard">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
            <StarRating initialRating={rating} onRatingChange={handleRatingChange} />
            <textarea
            className='comment-section'
            type="text"
            value={Comment}
            onChange={commentChange}
            placeholder="Type something..."
            />

            {/* Displaying the user input */}
            <p>User Input: {Comment}</p>
            <div>
                <button className='input-answer'>Submit</button>
            </div>
        </div>
    )
}

export default Question;