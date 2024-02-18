import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { AuthAdmin } from './AuthFunction.jsx';
import usePasswordToggle from './ShowPassword.jsx';
import './Signin.css'

const LoginAdmin = () => {
    //React Router Navigation
    const navigate = useNavigate();

    //Show password
    const { showPassword1, handleTogglePassword1 } = usePasswordToggle();

    //Firebase Auth
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [kantor, setKantor] = useState('Masyarakat Airmadidi Bawah');

    const handleSignIn = async (e) => {
        e.preventDefault(); //prevent page reload on form submit
        AuthAdmin(email, password, kantor, navigate);
    }

    return(
        <section className='hero'>
            <div className="login-container admin">
                <h1>Sign in <br/>Admin</h1>

                <form onSubmit={handleSignIn}>
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

                    <a href="#">Forgot password?</a>
                    <button type="submit" className="submit admin">Sign in</button>
                </form>
            </div>
        </section>
    )
}

export default LoginAdmin