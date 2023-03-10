import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand>Dogstel</Navbar.Brand>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            Home
          </Link>
          <Link to="/planes" className="text-white ms-3 text-decoration-none">
            Planes
          </Link>
        </Container>
      </Navbar>

    </>
  );
}
