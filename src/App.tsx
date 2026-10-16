import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { BandDetail } from './pages/BandDetail';
import './App.css';

function App() {
  return (
    <Router basename="/metalsmthng">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/band/:bandId" element={<BandDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
