import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap";

import Home from "../../purin-library-react/src/home/home.js";
import Search from "../../purin-library-react/src/search/search";


const ContactUs = () => {
  return (
      <>
        <Button variant="primary">Contact Us</Button>
      </>
  )
}

const footerStyle = {
  backgroundColor: "#f5f5f5"
}

function App(props) {
  return (
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="px-3">
            <Navbar.Brand href="/">푸린 도서관</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                {/*<Nav.Link href="/contact-us">Contact Us</Nav.Link>*/}
                {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                {/*  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                {/*  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                {/*  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                {/*  <NavDropdown.Divider />*/}
                {/*  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                {/*</NavDropdown>*/}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Router>
        <footer className="mt-auto py-3" style={footerStyle}>
          <span className="text-muted">Contact Us: purinlibrary@gmail.com</span>
        </footer>
      </div>
  );
}

export default App;