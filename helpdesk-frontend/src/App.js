import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import AdminPanel from './components/AdminPanel';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';


// Create a custom history object

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/tickets/:id" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
