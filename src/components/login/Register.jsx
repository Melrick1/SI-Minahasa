import {Link} from "react-router-dom"
import usePasswordToggle from './FuncLogin';

const Register = () => {
    const { showPassword1, showPassword2, handleTogglePassword1, handleTogglePassword2 } = usePasswordToggle();

    return(
        <section className='hero'>
            <div className="login-container">
                <h1>Register</h1>
                <form action="#">
                    <label>Masukkan data anda :</label>
                    <div className="form-content">
                        <input className='inputbox typed' type="text" name="nama" id="email" placeholder="Nama Lengkap"/>
                    </div>
                    <div className="form-content">
                        <input className='inputbox typed' type="email" name="email" id="email" placeholder="Email Address"/>
                    </div>
                    <div className="form-content">
                        <input className='inputbox pass' type={showPassword1 ? "text" : "password"} name="password" id="password" placeholder="Password" />
                        <span className="input-group-text" onClick={handleTogglePassword1}>
                            <i className={`bi bi-eye${showPassword1 ? '-slash' : ''}`}></i>
                        </span>
                    </div>
                    <div className="form-content">
                        <input className='inputbox pass' type={showPassword2 ? "text" : "password"} name="Re-enter-password" id="Re-enter-password" placeholder="Re-enter your Password" />
                        <span className="input-group-text" onClick={handleTogglePassword2}>
                            <i className={`bi bi-eye${showPassword2 ? '-slash' : ''}`}></i>
                        </span>
                    </div>
                    <a href="#">Forgot password?</a>
                    <button className="submit admin">Register</button>
                </form>
            </div>
        </section>
    )
}

export default Register