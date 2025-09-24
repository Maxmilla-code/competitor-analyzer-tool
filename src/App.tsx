import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import DashboardPage from './pages/DashboardPage';
import CompetitorsPage from './pages/CompetitorsPage';
import IndustriesPage from './pages/IndustriesPage';
import ReportsPage from './pages/ReportsPage';
import AlertsPage from './pages/AlertsPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <NavBar />
      <main className="h-[calc(100vh-60px)]">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/competitors" element={<CompetitorsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
