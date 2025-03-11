import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/login'; // Login component
import { RegisterPage } from './components/login'; // Register component
import HomePage from './HomePage';
import FarmerDashboard from './dashboard/farmer/Dashboard';
import RetailerDashboard from './dashboard/retailer/Dashboard';
import GovernmentDashboard from './dashboard/government/Dashboard';


const AppRoutes = () => {
    return (
        <Routes>
            {/* Homepage */}
            <Route path="/" element={<HomePage />} />
            {/* Login and Register */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/dashboard/farmer' element={<FarmerDashboard />} />
            <Route path='/dashboard/retailer' element={<RetailerDashboard />} />
            <Route path='/dashboard/government' element={<GovernmentDashboard />} />
        </Routes>
    );
};

export default AppRoutes;
