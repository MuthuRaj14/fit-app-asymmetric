import React, { useState } from 'react';
import "../Styles/Register.css"
import banner_video from '../Videos/hero.webm'


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registration successful!');
    };

    return (
        <div className="register-fragment flex justify-center  items-center h-screen bg-gradient-to-r from-green-300 via-violet-300 to-gray-300" id='join-us'>
            <video autoPlay muted loop>
                <source src={banner_video} />
            </video>
            <div className="register-area p-10 rounded-3xl shadow-lg w-full max-w-md border border-gray-300 transition-transform transform hover:scale-105">
                <h2 className="register-content text-4xl font-bold mb-8 text-center text-gray-800 drop-shadow-lg">
                    Register
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-lg font-semibold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input w-full px-2 py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-lg font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input w-full px-2 py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400 transition duration-300"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="submit-btn w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;