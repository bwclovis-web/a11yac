import React, {useEffect, useState} from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../components/Layout/Layout';
import ContentGrab from '../components/ContentGrab/ContentGrab';
import styled from 'styled-components';

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

const StyledContainer = styled.section<{ready: boolean}>`
    transition: all .2s ease-in-out;
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
            margin-top: 3.6rem;
        }
        li {
            margin-bottom: 10px;
        }

        a {
            color: var(--blue-md);
            padding: 10px;

            &:hover,
            &:focus {
                text-decoration: underline;
            }

            &:focus {
                box-shadow: inset 0 0 0 3px var(--grey-dk);
            }
        }
    }
`;


const CriteriaTemplate: React.FC<CriteriaI> = ({pageContext}) => {
    const {criteria} = pageContext;
    const [pageReady, setPageReady] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setPageReady(true)
        })
    });

    return (
        <Layout header={criteria.frontmatter.title}>
            <StyledContainer ready={pageReady}>
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