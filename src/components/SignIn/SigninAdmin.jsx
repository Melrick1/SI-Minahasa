import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { AuthAdmin } from './SignInFunctions/AuthFunction.jsx';
import usePasswordToggle from './SignInFunctions/ShowPassword.jsx';
import './Signin.css'

const LoginAdmin = () => {
    //React Router Navigation
    const navigate = useNavigate();

    //Show password
    const { showPassword1, handleTogglePassword1 } = usePasswordToggle();

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [kantor, setKantor] = useState('Admin Airmadidi Bawah');
    const [errorMessage, setErrorMessage] = useState('')

    const SignInHandler = async (e) => {
        e.preventDefault(); //prevent page reload on form submit
        AuthAdmin(email, password, kantor, navigate, setErrorMessage);
    }

    return(
        <section className='hero'>
            <div className="login-container admin">
                <h1>Sign in <br/>Admin</h1>

                <p className='error auth-message'>&nbsp;{errorMessage}</p>
                <form onSubmit={SignInHandler}>
                    {/* Combobox input */}
                    <label>Pilih kantor admin anda :</label>
                    <div className="form-content">
                        <select className='inputbox combo'
                        value={kantor}
                        onChange={(e) => setKantor(e.target.value)}>
                            <option value="Admin Airmadidi Bawah">Kantor Kelurahan Airmadidi Bawah </option>
                            <option value="Admin Watutumou Dua">Kantor Hukum Tua Desa Watutumou Dua</option>
                        </select>
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
                    
                    {/* Password input */}
                    <div className="form-content">
                        <input 
                            className='inputbox pass' 
                            type={showPassword1 ? "text" : "password"} 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}> 
                        </input>
                        <span className="input-group-text" onClick={handleTogglePassword1}>
                                <i className={`bi bi-eye${showPassword1 ? '-slash' : ''}`}></i>
                        </span>
                    </div>

                    <a className='normal-link' href="#">Forgot password?</a>
                    <button type="submit" className="submit admin">Sign in</button>
                </form>
            </div>
        </section>
    )
}

export default LoginAdmin