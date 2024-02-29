import React, { useState } from 'react';
import StarRating from '../PageFunctions/StarRating.jsx';
import './LandingMasyarakat.css'
import FetchDataComponent from '../PageFunctions/FetchData.jsx';

const MasyarakatWatutumouDua = () =>{
    const userData = FetchDataComponent();

    return(
        <section className='landing'>
            <header>
                <h3>Selamat datang</h3>
            </header>
            <div className='landingContent'>
                <div className='line'></div>
                <h2>Layanan pemerintah Desa Watutumou Dua</h2>

                <div className="questionDisplay">
                    <Question/>
                    <Question/>
                </div>
            </div>
        </section>
    )
}

export default MasyarakatWatutumouDua