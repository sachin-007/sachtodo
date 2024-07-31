// // import type { NextPage } from 'next'
// // import Login from '../components/Login'

// // const LoginPage: NextPage = () => {
// //   return <Login />
// // }

// // export default LoginPage

// import type { NextPage } from 'next'
// import Login from '../components/Login'
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'
// import { useSelector } from 'react-redux'
// import { RootState } from '../store'

// const LoginPage: NextPage = () => {
//   const router = useRouter()
//   // const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth)
//   const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth)
//   // useEffect(() => {
//   //   if (!loading && isAuthenticated) {
//   //     router.push('/dashboard')
//   //   }
//   // }, [isAuthenticated, loading, router])

//   // if (loading || isAuthenticated) return null
//   useEffect(() => {
//     if (!loading && isAuthenticated) {
//       router.push('/dashboard')
//     }
//   }, [isAuthenticated, loading, router])

//   if (loading || isAuthenticated) return null

//   return <Login />
// }

// export default LoginPage


import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Login from '../components/Login';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, loading, router]);

  if (loading || isAuthenticated) return null;

  return <Login />;
};

export default LoginPage;