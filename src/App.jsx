import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Index />} />
      </Routes>
    </Layout>
  );
}

export default App;
