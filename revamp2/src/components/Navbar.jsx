  import React, { useState} from 'react';
import './../styles/navstyle.css';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div  to="/" className="nav-logo">
             <a href='/'> <img src={"https://res.cloudinary.com/dapbrn8a9/image/upload/v1722944084/Website_Revamp/logo_2_1_wvfozm.webp"} alt="logo1" className='h-12'/></a>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links"  onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-links"  onClick={handleClick}>
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/froshare" className="nav-links"  onClick={handleClick}>
                  FroShare
                </Link>
              </li>
            </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
                <RxCross2 className='text-white' />
            ) : (
              <RxHamburgerMenu  className='text-white'/>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;