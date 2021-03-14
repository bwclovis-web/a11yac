import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components';

const NavigationStyles = styled.nav`
    background-color: var(--grey);
    position: sticky;
    height: calc(100vh - 94px);
    padding: 120px 100px;
    z-index: 6;
    width: 16%;
`

const Navigation = () => (
    <NavigationStyles>
        <ul>
            <li>
                <Link to ="/new-component">New Component</Link>
            </li>
            <li><Link to ="/component-listing">Current Components</Link></li>
        </ul>
    </NavigationStyles>
)

export default Navigation;