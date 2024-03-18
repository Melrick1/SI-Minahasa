import React, { useState } from 'react';
import FetchDataComponent from './FetchData.jsx';
import {Link} from 'react-router-dom'
import './Landingpage.css'

const MasyarakatAirmBawah = () =>{
    const userData = FetchDataComponent();

    return(
        <section className='landing'>
            <div className='landing-container'>
                <h2>Selamat datang di sistem pertanyaan Airmadidi Bawah</h2>

                <div className='landing-buttons'>
                    <Link to="/SKCK-AirmBawah" className='button homecard-link'>Layanan SKCK</Link>
                    <Link to="/SKKK-AirmBawah" className='button homecard-link'>Layanan SKKK</Link>
                    <Link to="/SKP-AirmBawah" className='button homecard-link'>Layanan SKP</Link>
                </div>
            </div>
        </section>
    )
}

export default MasyarakatAirmBawah