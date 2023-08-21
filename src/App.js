import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import PrivateRoutes from './components/PrivateRoutes';
import ReserveForm from './components/ReserveForm';
import './App.css';

function App() {
  // const API_URL = 'http://127.0.0.1:3001/api/v1/spa_services';
  // const [services, setServices] = useState([]);
  // // eslint-disable-next-line no-unused-vars
  // const [fetchError, setFetchError] = useState(null);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       if (!response.ok) throw new Error('Did not receive expected response');
  //       const listServices = await response.json();
  //       setServices(listServices);
  //       setFetchError(null);
  //     } catch (err) {
  //       setFetchError(err.message);
  //     } finally {
  //       // setIsLoading(false);
  //     }
  //   };
  //   fetchItems();
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/lo" element={<Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<NavBar />} path="/" exact>
            <Route index element={<HomePage />} />
            <Route path="/reserve" element={<ReserveForm />} />
            <Route path="/myreservations" element={<h1 style={{ marginLeft: '250px' }}>My reservations page goes here</h1>} />
            <Route path="/add_service" element={<h1 style={{ marginLeft: '250px' }}>Add treatment page goes here</h1>} />
            <Route path="/delete" element={<h1 style={{ marginLeft: '250px' }}>Delete page goes here</h1>} />
            <Route path="/*" element={<div style={{ marginLeft: '250px' }}>Page not found</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
