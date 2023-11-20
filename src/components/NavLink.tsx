import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
    font-family: var(--secondary-font-family);
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    color: var(--text-color);
    text-transform: uppercase;
    font-size: 1rem;
    transition: color 170ms ease-in-out, background-color 170ms ease-in-out;

  &:hover {
    color: rgba(29, 29, 29, 0.4);
    text-decoration: none;
  }
`;