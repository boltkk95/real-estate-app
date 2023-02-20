import './Navbar.css';
import logoimg from '../../Assets/estatery-logo.png';
import { MdArrowDropDown } from "react-icons/md";


function Navbar() {
  return (
    <div className="navbar">
      <div className='logo'><img src={logoimg} alt="logoImage" /><h1 className='logoTitle'>Estatery</h1></div>
      <div className='navMenu'>
        <button>Rent</button>
        <button>Buy</button>
        <button>Sell</button>
        <button>Manage Property <MdArrowDropDown/></button>
        <button>Resources <MdArrowDropDown/></button>
      </div>
      <div className='loginBtns'>
        <button className='loginBtn'>Login</button>
        <button className='signupBtn'>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
