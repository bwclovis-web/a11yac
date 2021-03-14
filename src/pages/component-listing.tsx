import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import React, {useState} from 'react';
import Layout from '../components/Layout/Layout';
import FilterBanner from '../components/Filter/Filter';

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

interface ListItemStylesI {
    isFiltered: boolean
}

const StyledListItem = styled.li<ListItemStylesI>`
    
    a {
        font-size: 2.6rem;
        color: var(--black);
        display: ${props => props.isFiltered ? 'block' : 'none'};
        letter-spacing: 0.12rem;
    }

`

const ComponentListingPage: React.FC<ComponentListPageI> = ({data}) => {
    const {edges} = data.allMdx;
    const [filtered, setIsFiltered] = useState('init');

    return(
        <Layout header="component listing">
            <FilterBanner data={edges} setFiltered={setIsFiltered}/>
            <div style={{marginTop: '60px'}}>
                <h2> Component Listing</h2>
                <ul>
                    {edges instanceof Array && edges.map(node => {
                        return (
                            <StyledListItem key={node.info.id} isFiltered={node.info.frontmatter.tag === filtered || filtered === 'init'}>
                                <Link to={`/component-listing/${node.info.slug}`}>
                                    {node.info.frontmatter.title}
                                </Link>
                            </StyledListItem>
                        )
                    })}
                </ul>
            </div>
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