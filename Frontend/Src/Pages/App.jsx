import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Matches from './pages/Matches';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/matches/:id" element={<Matches />} />
      </Routes>
    </BrowserRouter>
  );
}
