import './Login.css'
import usePasswordToggle from './FuncLogin';

const LoginAdmin = () => {
    const { showPassword, handleTogglePassword } = usePasswordToggle();

    return(
        <section className='hero'>
            <div className="login-container admin">
                <h1>Sign in <br/>Admin</h1>
                <form action="#">
                    <label>Pilih kantor admin anda :</label>
                    <div className="form-content">
                        <select className='inputbox combo' id="kantor" name="kantor">
                            <option value="Admin Airmadidi Bawah">Kantor Kelurahan Airmadidi Bawah </option>
                            <option value="Admin Watutumou Dua">Kantor Hukum Tua Desa Watutumou Dua</option>
                        </select>
                    </div>
                    <div className="form-content">
                        <input className='inputbox typed' type="email" name="email" id="email" placeholder="Email Address"/>
                    </div>
                    <div className="form-content">
                        <input className='inputbox pass' type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password"/>
                        <span className="input-group-text" onClick={handleTogglePassword}>
                                <i className={`bi bi-eye${showPassword ? '-slash' : ''}`}></i>
                        </span>
                    </div>
                    <a href="#">Forgot password?</a>
                    <button className="submit admin">Sign in</button>
                </form>
            </div>
        </section>
    )
}

export default LoginAdmin