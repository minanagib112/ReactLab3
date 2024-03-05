import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout({ showNavbar }) {
  const location = useLocation();
  const isNotFoundPage = location.pathname !== '/' && location.pathname !== '/add';

  if (isNotFoundPage) {
    return <Outlet />;
  }

  return (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
    </>
  );
}
