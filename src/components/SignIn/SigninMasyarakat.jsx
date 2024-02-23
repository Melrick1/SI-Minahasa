import {useState} from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { AuthMasyarakat } from './SignInFunctions/AuthFunction.jsx';
import usePasswordToggle from './SignInFunctions/ShowPassword.jsx';

const LoginMasyarakat = () => {
    //React Router Navigation
    const navigate = useNavigate();

    //Show password
    const { showPassword1, handleTogglePassword1 } = usePasswordToggle();

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [kantor, setKantor] = useState('Masyarakat Airmadidi Bawah');
    const [errorMessage, setErrorMessage] = useState('')

    const SignInHandler = async (e) => {
        e.preventDefault(); //prevent page reload on form submit
        AuthMasyarakat(email, password, kantor, navigate, setErrorMessage);
    }

    return(
        <section className="hero">
            <div className="login-container masyarakat">
                <h1>Sign in<br/>Masyarakat</h1>

                <p className='error auth-message'>&nbsp;{errorMessage}</p>
                <form onSubmit={SignInHandler}>
                    <label>Pilih wilayah anda :</label>
                    {/* Combobox input */}
                    <div className="form-content">
                        <select className='inputbox combo'
                        value={kantor}
                        onChange={(e) => setKantor(e.target.value)}>
                            <option value="Masyarakat Airmadidi Bawah">Masyarakat Kelurahan Airmadidi Bawah</option>
                            <option value="Masyarakat Watutumou Dua">Masyarakat Desa Watutumou Dua</option>
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
                    <div className="buttons-masyarakat">
                        <button type="submit" className="submit masyarakat">Sign in</button>
                        <Link to="/signup" className="register masyarakat">Register</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LoginMasyarakat