import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<div>Home page goes here</div>} />
          <Route path="/reserve" element={<div>Reserve page goes here</div>} />
          <Route path="/myreservations" element={<div>Myreservations page goes here</div>} />
          <Route path="/addreservation" element={<div>Add reservation page goes here</div>} />
          <Route path="/delete" element={<div>Delete page goes here</div>} />
          <Route path="/*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
