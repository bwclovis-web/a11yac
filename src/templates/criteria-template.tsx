import React, {useEffect, useState, useContext} from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../components/Layout/Layout';
import ContentGrab from '../components/ContentGrab/ContentGrab';
import styled from 'styled-components';

import PageContext from '../components/PageProvider/PageProvder';

interface CriteriaI {
    pageContext: {
        criteria: {
            frontmatter: {
                title: string,
                description: string,
                criteria: string,
            }
            id: string,
            body: string
        }
    }
}

interface ContainerSylesI {
    ready: boolean
    theme: string
    motionReduced: boolean
}


const StyledContainer = styled.section<ContainerSylesI>`
    transition: opacity ${props => props.motionReduced ? '.4s ease-in': '.2s ease-in-out'};
    transition: transform ${props => props.motionReduced ? 'none': '.2s ease-in-out'};
    max-width: 40vw;
    opacity: ${props => props.ready ? 1 : 0};
    transform: ${props => props.ready ? `translateX(0)` : `translateX(-10vw)` };
    position: relative;
    z-index: 4;

    & > p {
        font-size: 2rem;
        margin-bottom: 1.6rem;
    }

    .mdx-content {
        padding: 2rem 0 0;

        h2 {
            margin: 3.6rem 0 1rem;
            border-top: 1px solid var(--grey);
            padding-top: 2.4rem;
        }

        li {
            margin-bottom: 10px;
        }

        a {
            color: ${props => props.theme === 'dark' ? 'var(--blue-lt)' : 'var(--blue-md)'};
            padding: 10px;

            &:hover,
            &:focus {
                text-decoration: underline;
            }

            &:focus {
                border-radius: 3px;
                box-shadow: inset 0 0 0 3px ${props => props.theme === 'dark' ? 'var(--grey)' : 'var(--grey-dk)'};
            }
        }
    }
`;

const CriteriaTemplate: React.FC<CriteriaI> = ({pageContext}) => {
    const {criteria} = pageContext;
    const [pageReady, setPageReady] = useState<boolean>(false)
    const {theme, motionReduced} = useContext(PageContext)

    useEffect(() => {
        setTimeout(() => {
            setPageReady(true)
        })
    });

    return (
        <Layout header={criteria.frontmatter.title}>
            <StyledContainer ready={pageReady} theme={theme} motionReduced={motionReduced} >
                <p>{criteria.frontmatter.description}</p>
                <ContentGrab content={criteria.frontmatter.criteria}/>
                <div className="mdx-content">
                    <MDXRenderer>{criteria.body}</MDXRenderer>
                </div>
            </StyledContainer>
        </Layout>
    )
}

export default CriteriaTemplate;