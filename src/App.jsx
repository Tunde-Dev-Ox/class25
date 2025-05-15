import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/auth/login';
import CreateAccount from './pages/auth/create-account';
import Dashboard from './pages/dashboard';
import BookingRequestForm from './pages/dashboard/booking-request';
import AddPropertyForm from './pages/dashboard/add-property';
import Profile from './pages/dashboard/profile';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/create-account" element={<CreateAccount />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/dashboard/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/dashboard/booking-request" element={<BookingRequestForm />} />
        <Route path="/dashboard/add-property" element={<AddPropertyForm />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
