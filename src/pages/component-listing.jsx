import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';
import Layout from '../components/Layout/Layout';

const StyledList = styled.ul`
    li {
        a {
            font-size: 2.6rem;
            colot: var(--black);
        }
    }
`

const ComponentListingPage = ({data}) => {
    const {edges} = data.allMdx;
    return(
        <Layout header="component listing">
            <StyledList>
                {edges.map(node => {
                    return (
                        <li>
                            <Link to={`/component-listing/${node.info.slug}`}>
                                {node.info.frontmatter.title}
                            </Link>
                        </li>
                    )
                })}
            </StyledList>
        </Layout>
    )
}

export const query = graphql`
query slugQuery {
    allMdx(sort: {fields: slug}) {
        edges {
            info: node {
                frontmatter {
                    title
                    tag
                }
                slug
            }
        }
    }
}
`

export default ComponentListingPage;