import './App.css';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/Home';
import WalletAddress from './pages/WalletAddress';
import PayPalEmail from './pages/PayPalEmail';
import ContinueOne from './pages/ContinueOne';
import EnterAmount from './pages/EnterAmount';
import Review from './pages/Review';
import ConfirmPayment from './pages/ConfirmPayment';
import Successful from './pages/Successful';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/walletaddress" element={<WalletAddress/>}/>
        <Route path="/paypalemail" element={<PayPalEmail/>}/>
        <Route path="/continue-one" element={<ContinueOne/>}/>
        <Route path="/enteramount" element={<EnterAmount/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/confirm" element={<ConfirmPayment/>}/>
        <Route path="/successful" element={<Successful/>}/>
      </Routes>
    </Router>

  );
}

export default App;
