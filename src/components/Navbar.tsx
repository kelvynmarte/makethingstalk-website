import styled from 'styled-components';
import logo from '/mtt-icon.svg'

// Styled components for the Navbar
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const Logo = styled.img`
  max-height: 50px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;

  /* margin-left: auto; */
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #242424;
  text-transform: uppercase;

  &:hover {
    color: #838383;
    text-decoration: none;
  }
`;

// Navbar component
const Navbar = () => {
  return (
    <NavbarContainer className="container">
        <Logo src={logo} alt="make things talk" />
        <NavLinks>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/diy">DIY</NavLink>
        </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;