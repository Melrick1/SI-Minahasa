const LoginMasyarakat = () => {
    return(
        <section className="hero">
            <div className="login-container masyarakat">
                <h1>Sign in<br/>Masyarakat</h1>
                <form action="#">
                    <div className="form-content">
                        <label>Pilih wilayah anda :</label>
                        <select className='inputbox' id="fruit" name="fruit">
                            <option value="Masyarakat Airmadidi Bawah">Masyarakat Kelurahan Airmadidi Bawah</option>
                            <option value="Masyarakat Watutumou Dua">Masyarakat Desa Watutumou Dua</option>
                        </select>
                    </div>
                    <div className="form-content">
                        <input className='inputbox typed' type="email" name="email" id="email" placeholder="Email Address"/>
                    </div>
                    <div className="form-content">
                        <input className='inputbox typed' type="password" name="password" id="password" placeholder="Password"/>
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