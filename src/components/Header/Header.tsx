import React from 'react';
import styled from 'styled-components';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

interface HeaderI {
    content: string
    theme: string
    updateTheme(mode: string): void
}

interface HeaderStylesI {
    theme: string;
}

const HeaderStyles = styled.header<HeaderStylesI>`
    background-color: ${props => props.theme === 'dark' ? '#181818' : 'var(--blue)'};
    padding: 2rem 0;
    position: relative;
    z-index: 4;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const Header: React.FC<HeaderI> = ({theme, updateTheme, content}) => {
    return(
        <HeaderStyles theme={theme}>
            <div className="container">
                <h1>{content}</h1>
                <ThemeToggle theme={theme} updateTheme={updateTheme}/>
            </div>
        </HeaderStyles>
    )
}

export default Header;