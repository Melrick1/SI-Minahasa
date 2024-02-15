import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {auth, db} from '../../Firebase.js';
import usePasswordToggle from './FuncLogin';
import './Login.css'

const LoginAdmin = () => {
    //Show password
    const { showPassword1, handleTogglePassword1 } = usePasswordToggle();

    //Firebase Auth
    const [email, setEmail ]= useState('');
    const [password, setPassword] = useState('');

    const signIn = async (e) => {
        e.preventDefault();

        try {
            // Sign in with email and password
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            // Check if the user has an accType
            const q = query(collection(db, 'users'), where('uid', '==', userCredential.user.uid));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.docs.length > 0) {
                const userData = querySnapshot.docs[0].data();

                if (userData.accType === 'Admin') {
                    // Allow login for Admin
                    console.log("Signed in successfully:", userCredential.user);
                } else {
                    // User is not allowed to log in
                    console.log("User is not admin");
                }
            } else {
                console.error("User data not found");
            }
        } catch (error) {
            console.error("Error signing in:", error.message);
        }
    }

    return(
        <section className='hero'>
            <div className="login-container admin">
                <h1>Sign in <br/>Admin</h1>

                {/* Combobox input */}
                <div className="form-content">
                    <select className='inputbox combo' id="kantor">
                        <option value="Admin Airmadidi Bawah">Kantor Kelurahan Airmadidi Bawah </option>
                        <option value="Admin Watutumou Dua">Kantor Hukum Tua Desa Watutumou Dua</option>
                    </select>
                </div>

                <form onSubmit={signIn}>
                    <label>Pilih kantor admin anda :</label>

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