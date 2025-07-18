import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import FinalistsPage from './pages/finalists';
import FinalistsProfile from './pages/finalists/[slug]';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-finalists" element={<FinalistsPage />} />
        <Route path="/finalists/:slug" element={<FinalistsProfile />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
