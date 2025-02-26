// react
import { useEffect } from 'react'

// plugins
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// components
import RootLayout from './layouts/PageLayout'
import SportsLayout from './layouts/SportsLayout'
import HomePage from './pages/HomePage'
import SportPage from './pages/SportPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import VerifyEmailPage from './pages/VerifyEmailPage'
import NotFoundPage from './pages/NotFoundPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './pages/PrivateRoute'

// images
import preloadImages from './preload/images'

// services
import { heroLoader, routesLoader, sportsLoader } from './services/services'


const router = createBrowserRouter([
  {
    path: '/',
    id: 'rootLayout',
    element: <RootLayout />,
    loader: routesLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: heroLoader
      },
      {
        path: 'sports',
        id: 'sportsLayout',
        element: <SportsLayout />,
        loader: sportsLoader,
        children: [
          {
            path: ':id',
            element: <SportPage />
          }
        ]
      },
      {
        path: 'news',
        element: <NewsPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'signup',
        element: <SignupPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'verify-email',
        element: <VerifyEmailPage />
      },
      {
        path: 'reset-password',
        element: <ResetPasswordPage />
      },
      {
        path: 'dashboard',
        element: <PrivateRoute />,
        children: [
          {
            path: '',
            element: <Dashboard />
          }
        ]
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ]
  }
]);

const App = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      preloadImages();
    }
  }, []);

  return (
    <RouterProvider router={router} />
  );
};

export default App;

