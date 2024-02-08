import './LoginMasyarakat.css'

const LoginMasyarakat = () => {
    return(
        <section>
            <h1>Login Masyarakat</h1>
            <div class="card">
                <h1>Sign in</h1>
                <p class="small">Sign in to check your registration progress</p>
                <form action="#">
                <div class="form-content">
                    <input type="text" name="username" id="username" placeholder="Username"/>
                </div>
                <div class="form-content">
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </div>
                <p><a href="#">Forgot password?</a></p>
                <button class="submit">Sign in</button>
                <p class="divider"><span>or</span></p>
                <button class="social"><i class="fa-brands fa-google"></i> Sign in with Google</button>
                </form>
            </div>
            <footer>Don't have account? <a href="#">Join now</a></footer>
        </section>
    )
}

export default LoginMasyarakat