import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';
import Layout from '../components/Layout/Layout';

interface ComponentListPageI {
    data: {
        allMdx: {
            edges: {
                info: {
                    frontmatter: {
                        title: string,
                        tag: string
                    }
                    slug: string
                    id: string
                }
            }
        }
    }
}

const StyledList = styled.ul`
    li {
        a {
            font-size: 2.6rem;
            colot: var(--black);
        }
    }
`

const ComponentListingPage: React.FC<ComponentListPageI> = ({data}) => {
    const {edges} = data.allMdx;
    return(
        <Layout header="component listing">
            <StyledList>
                {edges instanceof Array && edges.map(node => {
                    return (
                        <li key={node.info.id}>
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
                id
            }
        }
    }
}
`

export default ComponentListingPage;