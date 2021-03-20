import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components';

interface NavigationI  {
    theme: string
}

const NavigationStyles = styled.nav<NavigationI>`
    background-color: ${props => props.theme === 'dark' ? '#181818': 'var(--grey)'};
    position: sticky;
    padding: 120px 100px;
    z-index: 6;
    width: 16%;
    height: 100%;

    a {
        color: ${props => props.theme === 'dark' ? 'var(--white)': 'var(--black)'};
    }
`

const Navigation: React.FC<NavigationI> = ({theme}) => (
    <NavigationStyles theme={theme}>
        <ul>
            <li>
                <Link to ="/new-component">New Component</Link>
            </li>
            <li><Link to ="/component-listing">Current Components</Link></li>
        </ul>
    </NavigationStyles>
)

export default Navigation;