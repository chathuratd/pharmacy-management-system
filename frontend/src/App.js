import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { UserContextProvider } from './context/UserContext';
//Pages & Components
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import PrescriptionUpload from './components/PrescriptionUpload';
import Loyalty from './pages/Loyalty';


function App() {
  const { user } = useAuthContext();


  return (
    <UserContextProvider>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={user ? <Home/> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route 
              path="/loyalty"
              element={<Loyalty />}
            />
            <Route
              path='/prescriptions'
              element={<PrescriptionUpload />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </UserContextProvider>
  );
}

export default App;
