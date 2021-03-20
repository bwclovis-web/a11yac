import React, {useContext} from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typogrgaphy from '../../styles/Typography';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Head from '../Head/Head';
import AlertMessage from '../Alert/Alert';

import PageContext from '../PageProvider/PageProvder';
interface ContainerI {
    header: string
    children: JSX.Element[] | JSX.Element
    updateTheme?(mode: string): void
}

const ContainerStyles = styled.div`
    display: flex;
    height: 100%;

    main {
        padding: 12rem 6rem;
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: ${props => props.theme === 'dark' ? 'var(--black)' : 'var(--white)'};
    }
`;

const Layout: React.FC<ContainerI> = ({header, children}) => {
    const {theme, updateTheme} = useContext(PageContext)
    return (
        <>
            <GlobalStyles theme={theme}/>
            <Typogrgaphy theme={theme}/>
            <Head title={header}/>
            <Header content={header} theme={theme} updateTheme={updateTheme}/>
            <ContainerStyles theme={theme}>
                <Navigation theme={theme} />
                <main>
                    <>
                        <AlertMessage alertMessage="saved to clipboard successfully"/>
                        {children}
                    </>
                </main>
            </ContainerStyles>
        </>
    )
}

export default Layout;