import styled from 'styled-components';
import logo from '../assets/mtt-logo.svg';
import { NavLink } from './NavLink';

// Styled components for the Navbar
const NavbarContainer = styled.nav`
  grid-column: breakout;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 2rem 0;
  gap: 3rem;
`;

const Logo = styled.img`
  height: 2.25rem;
  margin-right: 3rem;
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  justify-content: flex-end;

  /* margin-left: auto; */
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