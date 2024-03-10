import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import FetchDataComponent from './FetchData.jsx';

const MasyarakatWatutumouDua = () =>{
    const userData = FetchDataComponent();
    
    return(
        <section className='landing'>
            <div className='landing-container'>
                <h2>Selamat datang di sistem pertanyaan Watutumou Dua</h2>

                <div className='homecard-buttons'>
                    <Link to="/SKCK-WatutumouDua" className='button homecard-link'>Layanan SKCK</Link>
                    <Link to="/SKKK-WatutumouDua" className='button homecard-link'>Layanan SKKK</Link>
                    <Link to="/SKP-WatutumouDua" className='button homecard-link'>Layanan SKP</Link>
                </div>
            </div>
        </section>
    )
}

export default MasyarakatWatutumouDua