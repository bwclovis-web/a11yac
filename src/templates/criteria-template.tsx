import React from 'react';
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

const StyledContainer = styled.section`
    max-width: 40vw;

    & > p {
        font-size: 2rem;
        margin-bottom: 1.6rem;
    }

    .mdx-content {
        padding: 2rem 0 0;

        h2 {
            margin-top: 3.6rem;
        }
    }
`;


const CriteriaTemplate: React.FC<CriteriaI> = ({pageContext}) => {
    const {criteria} = pageContext;

    return (
        <Layout header={criteria.frontmatter.title}>
            <StyledContainer>
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