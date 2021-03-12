import React from 'react';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../components/Layout/Layout';
import ContentGrab from '../components/ContentGrab/ContentGrab';
import styled from 'styled-components';

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
`

const CriteriaTemplate = ({data}) => {
    const {criteria} = data;

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

export const query = graphql`
    query AcQuerry($slug: String!) {
        criteria: mdx(slug: {eq: $slug}) {
            frontmatter {
                title
                description
                criteria
            }
            id
            body
        }
    }
`

export default CriteriaTemplate;