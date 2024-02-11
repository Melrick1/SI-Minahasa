import usePasswordToggle from './FuncLogin';

const LoginMasyarakat = () => {
    const { showPassword, handleTogglePassword } = usePasswordToggle();

    return(
        <section className="hero">
            <div className="login-container masyarakat">
                <h1>Sign in<br/>Masyarakat</h1>
                <form action="#">
                    <label>Pilih wilayah anda :</label>
                    <div className="form-content">
                        <select className='inputbox combo' id="masyarakat" name="masyarakat">
                            <option value="Masyarakat Airmadidi Bawah">Masyarakat Kelurahan Airmadidi Bawah</option>
                            <option value="Masyarakat Watutumou Dua">Masyarakat Desa Watutumou Dua</option>
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
                    <div className="buttons-masyarakat">
                        <button class="submit masyarakat">Sign in</button>
                        <button className="register masyarakat">Register</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LoginMasyarakat