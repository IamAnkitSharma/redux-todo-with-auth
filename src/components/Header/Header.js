import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, signedIn } from "../../actions/auth";
export default function Header() {
  const location = useLocation();
  console.log(location.pathname);

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(signedIn(token));
    }
  }, [dispatch]);
  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  // console.log("Auth "+ JSON.stringify(auth));
  // const [activeLink, setActiveLink] = useState("/");

  // const setActive= (e) => {
  //   e.target.className = classes.activeLink
  // }
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link
            // onClick={setActive}
            // className={activeLink === "/" ? classes.activeLink : ""}
            to="/"
          >
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link
            // onClick={() => {
            //   setActiveLink("/add");
            // }}
            // className={activeLink === "/add" ? classes.activeLink : ""}
            to="/add"
          >
            {" "}
            Add Todo{" "}
          </Link>
        </li>
        {!isLoggedIn ? (
          <li>
            <Link
              // onClick={() => {
              //   setActiveLink("/login");
              // }}
              // className={activeLink === "/login" ? classes.activeLink : ""}
              to="/login"
            >
              {" "}
              Login{" "}
            </Link>
          </li>
        ) : (
          <li onClick={logoutHandler}>
            <a href="#">Logout</a>
          </li>
        )}
      </ul>
    </nav>
  );
}
