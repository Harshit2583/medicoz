import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Components/HomePage/Home';
import Contact from './Components/ContactPage/Contact';
import Transaction from './Components/TransactionPage/Transaction';
import Doctor from './Components/DoctorPage/Doctor';
import Shopping from './Components/ShoppingPage/Shopping';
import Profile from './Components/ProfilePage/Profile';
import Shimmer from './Components/ShimmerPage/Shimmer';
import Error from './Components/ErrorPage/Error';
import Services from './Components/ServicePage/Services';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Shimmer />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: (
          // <Suspense fallback={<Shimmer />}>
            <Contact />
          // </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/doctor",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Doctor />
          </Suspense>
        ),
      },
      {
        path: "/shopping",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Shopping />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/transaction",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Transaction />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<Shimmer />}>
        <Error />
      </Suspense>
    ),
  },
]);


root.render(
  <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
