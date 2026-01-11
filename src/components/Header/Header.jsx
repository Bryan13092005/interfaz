
import Navbar from '../Navbar/Navbar';
import MainNav from '../MainNav/MainNav';
import './Header.css';

function Header() {
  return (
    <header className="header container" id='inicio'>
      <Navbar />
      <MainNav />
    </header>
  );
}

export default Header;