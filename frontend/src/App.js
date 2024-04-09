import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { UserContextProvider } from './context/UserContext';
//Pages & Components
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Navbar from './components/Navbar';
import Reorder from './pages/Reorder.js';
import Loyalty from './pages/Loyalty.js';
import Expired from './pages/Expired.js';
import AboutExpire from './pages/AboutExpire.js';
import OutOfStock from './pages/OutOfStock.js';
import AboutToOutOfStock from './pages/AboutToOutOfStocks.js';
import Prescription from './pages/Prescription.js';
import Leave from './pages/Leave.js'
import Billing from './pages/Billing.js';
import NewSale from './pages/NewSale.js';
import StaffReward from './pages/StaffReward.js';

import Inventory from './pages/Inventory.js';


import SalesReport from './pages/SR.js'

import './index.css';



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
              path="/reorder"
              element={<Reorder/>}
            />
            <Route 
              path="/loyalty"
              element={<Loyalty />}
            />
            <Route
              path= "/expired"
              element = {<Expired/>}
            />
            <Route
              path= "/abtexpired"
              element = {<AboutExpire/>}
            />
            <Route
              path= "/outofstock"
              element = {<OutOfStock/>}
            />
            <Route
              path= "/abtoutofstock"
              element = {<AboutToOutOfStock/>}
            />
             <Route
              path= "/staffReward"
              element = {<StaffReward/>}
            />

             <Route
              path='/leaves'
              element={<Leave/>}
            />
            <Route
              path="/prescription"
              element={<Prescription/>}
            />
            <Route
              path="/billing"
              element={<Billing/>}
            />
            <Route
              path="/new-sale"
              element={<NewSale/>}
            />
            
            <Route
                path="/inventory"
                element={<Inventory/>}
            />

            <Route
                path="/salesreport"
                element={<SalesReport/>}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </UserContextProvider>
  );
}

export default App;
