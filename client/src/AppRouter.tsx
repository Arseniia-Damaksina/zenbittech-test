import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Deals from './pages/Deals';

const AppRouter: React.FC = () => {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/assets" element={<Deals />} />
        </Routes>
      </Layout>
  );
};

export default AppRouter;
