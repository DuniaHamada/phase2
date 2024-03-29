import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <nav
      
        className={
         
          "navbar navbar-expand-lg bg-opacity-50 shadow p-3 mb-5 bg-body-tertiary rounded "
        }
      >
        <div className="container">
          <a className="navbar-brand" >
            <svg
              width="70px"
              height="40px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="04 shopping bag" id="_04_shopping_bag">
                <path d="M60.32,45.47l-2.4-5.5a2.138,2.138,0,0,0-1.95-1.27H47.14L45.07,24.27A4.939,4.939,0,0,0,40.09,20h-.43V18a4.01,4.01,0,0,0-8.02,0v2H31.2a4.936,4.936,0,0,0-4.97,4.25L24.16,38.7h-4.5a8.834,8.834,0,0,0-6.25,2.54c-.22.22-.42.44-.61.66V6.7A3.233,3.233,0,0,0,9.55,3.5H4.5a1,1,0,0,0,0,2H9.55A1.228,1.228,0,0,1,10.8,6.7V47.4a1,1,0,0,0,1,1h3.42a6.97,6.97,0,0,0-2.18,5.05,7.176,7.176,0,0,0,14.35,0,6.932,6.932,0,0,0-2.18-5.05H45.54a6.97,6.97,0,0,0-2.18,5.05,7.176,7.176,0,0,0,14.35,0,6.97,6.97,0,0,0-2.18-5.05h2.84a2.11,2.11,0,0,0,1.79-.97A2.021,2.021,0,0,0,60.32,45.47ZM33.64,18a2.01,2.01,0,0,1,4.02,0v2H33.64ZM26,39.94l2.21-15.43A2.947,2.947,0,0,1,31.2,22h.44v5a1,1,0,0,0,2,0V22h4.02v5a1,1,0,0,0,2,0V22h.43a2.957,2.957,0,0,1,3,2.53L45.3,39.92a1.768,1.768,0,0,1-.45,1.4A2.071,2.071,0,0,1,43.3,42H28a2.055,2.055,0,0,1-1.55-.68A1.747,1.747,0,0,1,26,39.94Zm-.61,13.51a5.177,5.177,0,1,1-5.17-5.05A5.12,5.12,0,0,1,25.39,53.45Zm30.32,0a5.177,5.177,0,1,1-5.18-5.05A5.123,5.123,0,0,1,55.71,53.45Zm2.66-7.05H12.88a6.589,6.589,0,0,1,1.93-3.73,6.827,6.827,0,0,1,4.85-1.97h4.39a3.846,3.846,0,0,0,.9,1.95A4.056,4.056,0,0,0,28,44H43.3a4.088,4.088,0,0,0,3.05-1.35,3.793,3.793,0,0,0,.89-1.95h8.73a.139.139,0,0,1,.12.07l2.4,5.57A.128.128,0,0,1,58.37,46.4Z" />
              </g>
            </svg>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active  fs-5"
                  aria-current="page"
                  to='/'
                >
                  Home
                </Link>
              </li>

              <li className={style.navitem}>
                <Link className="nav-link  fs-5 " aria-disabled="true" to='/Category'>
                  Categories
                </Link>
              </li>
              <li className={style.navitem}>
                <Link className="nav-link  fs-5 " aria-disabled="true"  to='/products'>
                  Products
                </Link>
              </li>
              <li className={style.navitem}>
                <Link className="nav-link  fs-5" aria-disabled="true" to='/cart' >
                  Cart
                </Link>
              </li>
            </ul>
            <form className="d-flex grid gap-2">
              <Link className={style.btn + " fs-5"} type="submit" to='/login'>
                Log in
              </Link>
              <Link className={style.btn + " fs-5"} type="submit" to='/signup'>
                Sign up
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
  
}

export default Navbar;
