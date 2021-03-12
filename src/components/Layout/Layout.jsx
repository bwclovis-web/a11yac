import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typogrgaphy from '../../styles/Typography';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const ContainerStyles = styled.div`
    display: flex;

    main {
        padding: 12rem 6rem;
    }
`;

const Layout = ({header, children}) => (
 <>
    <GlobalStyles />
    <Typogrgaphy />
    <Header content={header}/>
     <ContainerStyles>
        <Navigation />
        <main>
            {children}
        </main>
     </ContainerStyles>
 </>
)

export default Layout;