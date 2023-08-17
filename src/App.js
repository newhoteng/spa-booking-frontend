import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<h1 style={{ marginLeft: '250px' }}>Home page goes here</h1>} />
          <Route path="/reserve" element={<h1 style={{ marginLeft: '250px' }}>Reserve page goes here</h1>} />
          <Route path="/myreservations" element={<h1 style={{ marginLeft: '250px' }}>My reservations page goes here</h1>} />
          <Route path="/add-treatment" element={<h1 style={{ marginLeft: '250px' }}>Add treatment page goes here</h1>} />
          <Route path="/delete" element={<h1 style={{ marginLeft: '250px' }}>Delete page goes here</h1>} />
          <Route path="/*" element={<div style={{ marginLeft: '250px' }}>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
