// react
import { useEffect } from 'react'

// plugins
import { Outlet, useLoaderData, useNavigate, useLocation } from 'react-router-dom'

// components
import SportsHeader from '../headers/SportsHeader';
import Layout from '../components/helpers/Layout';

// data
import { Data } from '../types/data';

const SportsLayout = () => {
  const { sportsData } = useLoaderData() as { sportsData: Data[] }
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/sports') {
      navigate('basketball')
    }
  }, [location, navigate])

  return (
    <Layout blockPrefix='sports'>
      <SportsHeader data={sportsData} />
      <Outlet />
    </Layout>
  );
};

export default SportsLayout;