import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [name, setName] = useState("");
const [userType, setUserType] = useState("applicant");
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
const [showPassword, setShowPassword] = useState(false);
const [register, setRegister] = useAuth();
const navigate = useNavigate();

const  handleSubmit  = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
        setError('Passwords do not match');
    }
    try{
        setError('');
        setLoading()
        await register(email, password);
        navigate('/profile-setup', {state: {email, password}});
    }catch(error){
        setError('Failed to register, check your credentials');
        console.error(error);
    }
};

const handleGoogleLogin = async () => {
    try{
        setError('')
        setLoading(true);
        await loginWithGoogle();
        navigate('/dashboard');

    }catch(error){
        setError('Failed to register with Google');
        console.error(error);
    }
    setLoading(false);
}

return (
    <form onSubmit={handleSubmit} className="registration-form">
        {error &&  <div className="auth-error">{error}</div>}

        <div className="form-group">
            <label className="" htmlFor="name">Full Name</label>
            <div className="input-group">
                <span className="input-icon"><FaUser/></span>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="form-input" 
                placeholder="Enter your full name"/>
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="email" className="fotm-label">Email</label>
            <div className="input-group">
                <span className="input-icon"><FaEnvelope/></span>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-input" 
                placeholder="Enter your email"/>
            </div>
        </div>
    </form>
)