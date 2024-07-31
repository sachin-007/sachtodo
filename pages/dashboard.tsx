// // import type { NextPage } from 'next'
// // import { useEffect } from 'react'
// // import { useRouter } from 'next/router'
// // import { useSelector } from 'react-redux'
// // import { RootState } from '../store'
// // import Dashboard from '../components/Dashboard'

// // // const DashboardPage: NextPage = () => {
// // //   const router = useRouter()
// // //   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  

// // //   useEffect(() => {
// // //     if (!isAuthenticated) {
// // //       router.push('/login')
// // //     }
// // //   }, [isAuthenticated, router])

// // //   if (!isAuthenticated) return null

// // //   return <Dashboard />
// // // }



// // // const DashboardPage: NextPage = () => {
// // //   const router = useRouter()
// // //   const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth)

// // //   useEffect(() => {
// // //     if (!loading && !isAuthenticated) {
// // //       router.push('/login')
// // //     }
// // //   }, [isAuthenticated, loading, router])

// // //   if (loading || !isAuthenticated) return null

// // //   return <Dashboard />
// // // }
// // const DashboardPage: NextPage = () => {
// //   const router = useRouter()
// //   const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth)

// //   useEffect(() => {
// //     if (!loading && !isAuthenticated) {
// //       router.push('/login')
// //     }
// //   }, [isAuthenticated, loading, router])

// //   if (loading || !isAuthenticated) return null

// //   return <Dashboard />
// // }

// // export default DashboardPage













// import type { NextPage } from 'next';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';
// import Dashboard from '../components/Dashboard';

// const DashboardPage: NextPage = () => {
//   const router = useRouter();
//   const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     if (!loading && !isAuthenticated) {
//       router.push('/login');
//     }
//   }, [isAuthenticated, loading, router]);

//   if (loading || !isAuthenticated) return null;

//   return <Dashboard />;
// };

// export default DashboardPage;



import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Dashboard from '../components/Dashboard';

const DashboardPage: NextPage = () => {
  
  const router = useRouter();
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading || !isAuthenticated) {
    return <div>Loading...</div>;
  }

  return <Dashboard />;
};

export default DashboardPage;