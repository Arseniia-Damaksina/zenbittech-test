import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const AppRouter: React.FC = () => {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/taskboard/:id" element={<TaskBoard />} /> */}
        </Routes>
      </Layout>
  );
};

export default AppRouter;
