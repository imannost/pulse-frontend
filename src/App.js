import './App.css';
import React from 'react';
import Auth from './components/Main_components/Auth/Auth.jsx'
import DonorPlan from './components/Main_components/Donor-plan/Donor-plan.jsx'
import { useSelector } from 'react-redux';

function App() {
  const isAuthorized = useSelector(state => state.auth.isAuthorized)

  if (!isAuthorized) {
    return (
      <div className="Auth-wrapper">
        <Auth />
      </div>
    )
  }

  return (
    <DonorPlan />
  );
}

export default App;
