import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    background-color: var(--blue);
    padding: 20px 0;
`;

const Header = ({content}) => {
    return(
        <HeaderStyles>
            <div className="container">
                <h1>{content}</h1>
            </div>
        </HeaderStyles>
    )
}

export default Header;