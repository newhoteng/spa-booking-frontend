import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import PrivateRoutes from './components/PrivateRoutes';
import ReserveForm from './components/ReserveForm';
import './App.css';
import UserReservations from './components/UserReservations';
import DeleteService from './components/Delete';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<NavBar />} path="/" exact>
            <Route index element={<HomePage />} />
            <Route path="/reserve" element={<ReserveForm />} />
            <Route path="/myreservations" element={<UserReservations />} />
            <Route path="/add_service" element={<h1 style={{ marginLeft: '250px' }}>Add treatment page goes here</h1>} />
            <Route path="/delete" element={<DeleteService />} />
            <Route path="/*" element={<div style={{ marginLeft: '250px' }}>Page not found</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
