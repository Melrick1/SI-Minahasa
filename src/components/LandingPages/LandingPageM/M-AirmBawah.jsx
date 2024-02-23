import React, { useState } from 'react';
import StarRating from '../PageFunctions/StarRating.jsx';
import './LandingMasyarakat.css'
import FetchDataComponent from '../PageFunctions/FetchData.jsx';

const MasyarakatAirmBawah = () =>{
    const [rating, setRating] = useState(0);
    const [Comment, setComment] = useState('');
    const userData = FetchDataComponent();

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    // Event handler for input change
    const commentChange = (event) => {
        setComment(event.target.value);
    };

    return(
        <section className='landing'>
            <header>
                <h3>Selamat datang</h3>
            </header>
            <div className='landingContent'>
                <div className='line'></div>
                <h2>Layanan pemerintah kelurahan Airmadidi Bawah</h2>

                <div className="questionDisplay">
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
                    </div>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MasyarakatAirmBawah