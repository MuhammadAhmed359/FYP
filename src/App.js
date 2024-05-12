import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/dashboard';
import Loginform from './components/D1/loginform/loginform';
import LiveF from './components/LiveFootage/live';
import AllUser from './components/users/allusers/alluser';
// import ActiveUser from './components/D1/activeusers/activeu';
import ActiveUser from './components/users/activeusers/activeuser';
import ModifyUser from './components/users/modifyusers/modifyuser';
import CreateUser from './components/users/createusers/createuser';
import DelUser from './components/users/deleteusers/deluser';
import AnomalyStatistics from './components/AnomalyStatistics/Statistics';
import History from './components/AnomalyHistory/history';
import UserDashboard from './components/D2/userdashboard/udashboard';
import UserNavbar from './components/D2/usernavbar/usernavbar';
import AlertPopup from './components/D2/userdashboard/apopup';
function App() {
  return (
    <div >
      <Router> {/* Wrap your Routes in Router */}
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/live" element={<LiveF />} />
          <Route path="/user" element={<AllUser />} />
          <Route path="/Active_User" element={<ActiveUser />} />
          <Route path="/Modify_User" element={<ModifyUser />} />
          <Route path="/New_User" element={<CreateUser />} />
          <Route path="/Remove_User" element={<DelUser />} />
          <Route path="/statistics" element={<AnomalyStatistics />} />
          <Route path="/history" element={<History />} />
          <Route path="/udashboard" element={<UserDashboard />} />
          <Route path="/usernavbar" element={<UserNavbar />} />
          <Route path="/apopup" element={<AlertPopup />} />

        </Routes>

      </Router>
    </div>
  );
}
 
export default App;
