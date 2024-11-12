import React, { useState } from 'react';
import '../styling/Loginform.css';
import logo from '../assets/FillCartLogo.png';
import emailIcon from '../assets/email.png';
import passwordIcon from '../assets/password.png';
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Loginform = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email') {
      setErrors({ ...errors, email: value ? (validateEmail(value) ? '' : 'Invalid email format') : 'This field is required' });
    } else if (name === 'password') {
      setErrors({
        ...errors,
        password: value ? (validatePassword(value) ? '' : 'Password must be at least 8 characters') : 'This field is required'
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setErrors({ ...errors, email: value ? (validateEmail(value) ? '' : 'Invalid email format') : 'This field is required' });
    } else if (name === 'password') {
      setErrors({
        ...errors,
        password: value ? (validatePassword(value) ? '' : 'Password must be at least 8 characters') : 'This field is required'
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email) || !validatePassword(formData.password)) {
      alert('Please correct the errors before submitting');
      return;
    }
    alert('Form submitted successfully!');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Fillcart" className="mx-auto w-24 mb-1" />
      <h2>Welcome back!</h2>
      <p>Please enter your details</p>

      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <img src={emailIcon} alt="Email" className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="input-field password-container">
          <img src={passwordIcon} alt="Password" className="icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          <span onClick={toggleShowPassword} className="show-password">
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="checkbox-container">
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="btn">Log In</button>

        <button type="button" className="btn btn-google">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google logo" width="16" />
          Log in with Google
        </button>

        <div className="footer">
          Don’t have an account? <a href="#">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Loginform;
