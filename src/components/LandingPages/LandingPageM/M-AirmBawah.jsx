import React, { useState } from 'react';
import StarRating from '../PageFunctions/StarRating.jsx';
import './LandingMasyarakat.css'
import FetchDataComponent from '../PageFunctions/FetchData.jsx';
import Question from '../PageFunctions/Questions.jsx';

const MasyarakatAirmBawah = () =>{
    const userData = FetchDataComponent();

    return(
        <section className='landing'>
            <header>
                <h3>Selamat datang</h3>
            </header>
            <div className='landingContent'>
                <div className='line'></div>
                <h2>Layanan pemerintah kelurahan Airmadidi Bawah</h2>

                <div className="questionDisplay">
                    <Question/>
                    <Question/>
                </div>
            </div>
        </section>
    )
}

export default MasyarakatAirmBawah