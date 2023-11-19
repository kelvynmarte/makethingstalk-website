import styled from 'styled-components';
import logo from '../assets/mtt-logo.svg';
import { Link } from 'react-router-dom';

// Styled components for the Navbar
const NavbarContainer = styled.nav`
  grid-column: breakout;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 3.2rem 0;
  gap: 4.8rem;
`;

const Logo = styled.img`
  height: 3.6rem;
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
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
    font-size: 1.4rem;
    transition: color 170ms ease-in-out, background-color 170ms ease-in-out;

  &:hover {
    color: rgba(29, 29, 29, 0.4);
    text-decoration: none;
  }
`;

// Navbar component
const Navbar = () => {
	return (
		<NavbarContainer className='full-width'>
			<Logo src={logo} alt="make things talk" />
			<NavLinks>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/diy">Diy</NavLink>
			</NavLinks>
		</NavbarContainer>
	);
};

export default Navbar;