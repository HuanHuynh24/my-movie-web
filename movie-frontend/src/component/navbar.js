import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/header.css';

library.add(fas);
function Navbar() {
  return (
    <div className="container-fluid gx-0 header">
      <div className="row mx-0 my-0 align-items-center ">
        <div className="col logo">
          <img src="logo.png" alt="Movie Website Logo" />
        </div>
        <div className="col-8 nav">
          <ul className="row  my-0">
            <li className="col">
              <Link to="/">Home</Link>
            </li>
            <li className="col">
                <Link to="/features">Features</Link>
            </li>
            <li className="col">
              <Link to="/pages">Pages</Link>
            </li>
            <li className="col">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="col">
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
        <div className="col search">
          <ul className="row my-0">
            <li className="col"><Link><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></Link></li>
            <li className="col"><Link><FontAwesomeIcon icon="fa-solid fa-bell" /></Link></li>
            <li className="col"><Link><FontAwesomeIcon icon="fa-solid fa-user" /></Link></li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}
export default Navbar;
