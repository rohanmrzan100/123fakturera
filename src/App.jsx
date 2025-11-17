import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import LoginPage from './pages/login';
import PriceList from './pages/pricelist';
import TermsPage from './pages/terms';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/pricelist" element={<PriceList />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
