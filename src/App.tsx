import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import AdManagement from './pages/ManagementPage';
import AdStatusPage from './pages/DashboardPage';

function App() {
  return (
    <S.AppLayout>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<AdStatusPage />} />
          <Route path="/admin" element={<AdManagement />} />
        </Routes>
      </BrowserRouter>
    </S.AppLayout>
  );
}

const S = {
  AppLayout: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
  `,
};

export default App;
