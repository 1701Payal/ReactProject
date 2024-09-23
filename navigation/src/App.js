import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from  '../src/Activity/SignUp'
import Login from  '../src/Activity/Login'
import Navbar  from './Components/Navbar';
import Display from './Activity/Display';



export default function App() {
  return (
    <Router>
      <Navbar heading="payal"  /> 
      <Routes>
        <Route path="/" element={<Display/>} />
        <Route path="/login" element={<Login/>} />
       
        <Route path="*" element={<h1>404 Not Found</h1>} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}
