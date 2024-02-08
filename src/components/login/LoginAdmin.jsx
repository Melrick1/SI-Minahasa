import './Login.css'

const LoginAdmin = () => {
    return(
        <section className='hero'>
            <div className="login-container admin">
                <h1>Sign in <br/>Admin</h1>
                <form action="#">
                    <div class="form-content">
                        <label>Pilih kantor admin anda :</label>
                        <select className='inputbox' id="fruit" name="fruit">
                            <option value="Admin Airmadidi Bawah">Kantor Kelurahan Airmadidi Bawah </option>
                            <option value="Admin Watutumou Dua">Kantor Hukum Tua Desa Watutumou dua</option>
                        </select>
                    </div>
                    <div class="form-content">
                        <input className='inputbox typed' type="email" name="email" id="email" placeholder="Email Address"/>
                    </div>
                    <div class="form-content">
                        <input className='inputbox typed' type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <a href="#">Forgot password?</a>
                    <button class="submit admin">Sign in</button>
                </form>
            </div>
        </section>
    )
}

export default LoginAdmin