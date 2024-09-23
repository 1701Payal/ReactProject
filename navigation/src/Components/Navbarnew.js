import { Link } from 'react-router-dom';

export default function Navbarnew() {
  return (
    <nav>
      <ul>
        <li><Link to="/">SignUp</Link></li>
        <li><Link to="/about">Login</Link></li>
      
      </ul>
    </nav>
  );
}
