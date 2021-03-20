import React from 'react';
import styled from 'styled-components';

interface ThemeToggleI {
    theme: string
    updateTheme(mode: string): void
}

const ToggleStyles = styled.button`
    padding: 10px;
    text-transform: uppercase;
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    color: ${props => props.theme === 'dark' ? 'var(--grey-lt)' : 'var(--black)'};
    background-color: ${props => props.theme === 'dark' ? 'var(--blue-md)' : 'var(--grey-lt)'};
`

const ThemeToggleButton: React.FC<ThemeToggleI> = ({theme, updateTheme}) => {
    const handleThemeToggle = () => {
        theme === 'dark' ? updateTheme('') : updateTheme('dark')
    }

    const swapText = () => {
        return theme === 'dark' ? 'light mode' : 'dark mode'
    }

    return (
        <ToggleStyles onClick={handleThemeToggle} theme={theme}>{swapText()}</ToggleStyles>
    )
}

export default ThemeToggleButton;