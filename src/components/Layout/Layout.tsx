import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typogrgaphy from '../../styles/Typography';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Head from '../Head/Head';

interface ContainerI {
    header: string;
    children: JSX.Element[] | JSX.Element
}

const ContainerStyles = styled.div`
    display: flex;

    main {
        padding: 12rem 6rem;
        position: relative;
    }
`;

const Layout: React.FC<ContainerI> = ({header, children}) => (
 <>
    <GlobalStyles />
    <Typogrgaphy />
    <Head title={header}/>
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