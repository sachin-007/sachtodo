// import React, { useState } from 'react';
// import Link from 'next/link';


// const Signup: React.FC = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="min-h-screen bg-purple-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Welcome to Workflo!</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Full name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             className="w-full mb-4 p-2 border rounded-md"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full mb-4 p-2 border rounded-md"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full mb-6 p-2 border rounded-md"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
//           >
//             Sign up
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account? <Link href="/login" className="text-indigo-600 hover:underline">Log in</Link>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signUp } from '../store/slices/authSlice';
import { AppDispatch } from '../store';

const Signup: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await dispatch(signUp({ name: fullName, email, password })).unwrap();
      router.push('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome to Workflo!</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full mb-4 p-2 border rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Sign up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link href="/login" className="text-indigo-600 hover:underline">Log in</Link>.
        </p>
      </div>
    </div>
  );
};

export default Signup;