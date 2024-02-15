import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from 'react';
import {auth} from "../../Firebase.js"
import {Link} from "react-router-dom"
import usePasswordToggle from './FuncLogin';

const Register = () => {
    const { showPassword1, showPassword2, handleTogglePassword1, handleTogglePassword2 } = usePasswordToggle();

    //Firebase Auth
    const [fullName, setFullName] = useState('');
    const [email, setEmail ]= useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState(''); //Re-enter password

    const signUp = async (e) => {
        e.preventDefault(); //stop page from reload on submit

        // Check if passwords match
        if (password1 !== password2) {
            console.log("Passwords do not match");
            return;
        }

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password1);

            // Update user profile with full name
            await updateProfile(userCredential.user, {
                displayName: fullName
            });

            // Registered successfully
            console.log(userCredential.user);
        } catch (error) {
            console.error(error.code);
            console.error(error.message);
        }
    }

    return(
        <section className='hero'>
            <div className="login-container">
                <h1>Register</h1>
                <form onSubmit={signUp}>
                    <label>Masukkan data anda :</label>

                    {/* Name input */}
                    <div className="form-content">
                        <input
                            className='inputbox typed'
                            type="text"
                            placeholder="Nama Lengkap"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}>
                        </input>
                    </div>

                    {/* Email input */}
                    <div className="form-content">
                        <input
                            className='inputbox typed'
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </div>

                    {/* Password input 1 */}
                    <div className="form-content">
                        <input 
                            className='inputbox pass' 
                            type={showPassword1 ? "text" : "password"}  
                            placeholder="Re-enter Password"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}>
                        </input>
                        <span className="input-group-text" onClick={handleTogglePassword1}>
                            <i className={`bi bi-eye${showPassword1 ? '-slash' : ''}`}></i>
                        </span>
                    </div>

                    {/* Password input 2 */}
                    <div className="form-content">
                        <input 
                            className='inputbox pass' 
                            type={showPassword2 ? "text" : "password"}  
                            placeholder="Re-enter Password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}>
                        </input>
                        <span className="input-group-text" onClick={handleTogglePassword2}>
                            <i className={`bi bi-eye${showPassword2 ? '-slash' : ''}`}></i>
                        </span>
                    </div>

                    <Link to="/login-masyarakat">Back to login</Link>
                    <button type="submit" className="submit admin">Register</button>
                </form>
            </div>
        </section>
    )
}

export default Register