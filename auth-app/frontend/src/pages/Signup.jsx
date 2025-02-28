// axiox 

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { handleError, handleSuccess } from '../util';

export default function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Signup Data: ", signupInfo);

        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            handleError('Name, email, and password are required.');
            return;
        }

        try {
            const url = "http://localhost:8000/auth/signup";
            const { data } = await axios.post(url, signupInfo); 

            console.log(data);

            const { success, message, error } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 500);
            } else {
                const details = error?.details?.[0]?.message || "Something went wrong";
                handleError(message || details);
            }
        } catch (err) {
            handleError(err.response?.data?.message || err.message || "Signup failed. Please try again.");
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={signupInfo.name}
                        placeholder="Enter your name..."
                        autoFocus
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        value={signupInfo.email}
                        placeholder="Enter your email..."
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={signupInfo.password}
                        placeholder="Enter your password..."
                    />
                </div>

                <button type="submit">Signup</button>

                <span>
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
}







// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { handleError, handleSuccess } from '../util';

// export default function Signup() {
//     const [signupInfo, setSignupInfo] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     const navigate = useNavigate();  // ✅ Added useNavigate

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setSignupInfo(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Signup Data: ", signupInfo);
//         const { name, email, password } = signupInfo;

//         if (!name || !email || !password) {
//             handleError('Name, email, and password are required.');
//             return;
//         }

//         try {
//             const url = "http://localhost:8000/auth/signup";
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(signupInfo)
//             });

//             const result = await response.json();  // ✅ Fixed missing `await`
//             console.log(result);

//             const { success, message, error } = result;

//             if (success) {
//                 handleSuccess(message);
//                 setTimeout(() => {
//                     navigate('/login');  // ✅ Fixed `Navigate`
//                 }, 500);
//             } else {
//                 const details = error?.details?.[0]?.message || "Something went wrong";
//                 handleError(message || details);
//             }

//         } catch (err) {
//             handleError(err.message || "Signup failed. Please try again.");
//         }
//     };

//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name</label>
//                     <input
//                         onChange={handleChange}
//                         type="text"
//                         name="name"
//                         value={signupInfo.name}
//                         placeholder="Enter your name..."
//                         autoFocus
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input
//                         onChange={handleChange}
//                         type="email"
//                         name="email"
//                         value={signupInfo.email}
//                         placeholder="Enter your email..."
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input
//                         onChange={handleChange}
//                         type="password"
//                         name="password"
//                         value={signupInfo.password}
//                         placeholder="Enter your password..."
//                     />
//                 </div>

//                 <button type="submit">Signup</button>

//                 <span>
//                     Already have an account? <Link to="/login">Login</Link>
//                 </span>
//             </form>
//             <ToastContainer />
//         </div>
//     );
// }






