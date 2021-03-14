import React, { ReactElement } from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    background-color: var(--blue);
    padding: 20px 0;
    position: relative;
    z-index: 4;
`;

interface HeaderI {
    content: string
}

const Header = (props: HeaderI): ReactElement => {
    return(
        <HeaderStyles>
            <div className="container">
                <h1>{props.content}</h1>
            </div>
        </HeaderStyles>
    )
}

export default Header;