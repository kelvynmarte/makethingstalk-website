import styled from 'styled-components';
import logo from '../assets/mtt-logo.svg';
import { Link } from 'react-router-dom';

// Styled components for the Navbar
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4.4rem 7.6rem;
`;

const Logo = styled.img`
  height: 3.6rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;

  /* margin-left: auto; */
`;

const NavLink = styled(Link)`
    font-family: var(--secondary-font-family);
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    color: var(--text-color);
    text-transform: uppercase;
    font-size: 1.3rem;
    transition: color 170ms ease-in-out, background-color 170ms ease-in-out;

  &:hover {
    color: rgba(29, 29, 29, 0.4);
    text-decoration: none;
  }
`;

// Navbar component
const Navbar = () => {
	return (
		<NavbarContainer>
			<Logo src={logo} alt="make things talk" />
			<NavLinks>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/diy">DIY</NavLink>
			</NavLinks>
		</NavbarContainer>
	);
};

export default Navbar;