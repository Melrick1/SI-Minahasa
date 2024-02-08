import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import './Homepage.css'

const Homepage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getAdjustedWidth = () => {
        if (screenWidth >= 540) {
            return 250; // Width for larger screens
        } else if (screenWidth <= 540) {
            return 200; // Width for medium screens
        }
    };

    return(
        <section className="hero">
            <div className='homecard'>
                <div>
                    <img src="/LogoMinahasaUtara.png" width={getAdjustedWidth()} alt="Logo"></img>
                </div>
                <div>
                    <h2>Sistem Informasi Kepuasan Layanan Pemerintah <br/>di Minahasa Utara</h2>
                    <div className='homecard-buttons'>
                        <Link to="/login-masyarakat" className='homecard-link'>Login Masyarakat</Link>
                        <Link to="/login-admin" className='homecard-link'>Login Admin</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Homepage