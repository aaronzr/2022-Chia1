import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo/logo.png";
import Button from 'react-bootstrap/Button'
// import { Link } from "react-router-dom";

/**
 * Topbar component
 * @returns topbar
 */
export function Topbar() {

  return (
    <Navbar className="navbar">
      <Navbar.Brand>
        {/*<Link to="/home">*/}
          <img src={logo} alt="Oval logo" className="navbar-logo" />
        {/*</Link>*/}
      </Navbar.Brand>
      <Nav>
        <Button
          className="mb-2"
          id="toggle-check"
          type="button"
          variant="outline-dark"
        >
          Account
        </Button>
      </Nav>
      <Nav>

        <Button
          className="mb-2"
          id="toggle-check"
          type="button"
          variant="outline-success"
        >
          Connect Wallet
        </Button>

      </Nav>
    </Navbar>
  );
}
