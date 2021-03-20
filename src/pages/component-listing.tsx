import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import React, {useState,useContext} from 'react';
import Layout from '../components/Layout/Layout';
import FilterBanner from '../components/Filter/Filter';
import PageContext from '../components/PageProvider/PageProvder';
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
    filtered: boolean
}

const StyledListItem = styled.li<ListItemStylesI>`
    a {
        font-size: 2.6rem;
        color: ${props => props.theme === 'dark' ? 'var(--grey-lt)' : 'var(--black)'};
        display: ${props => props.filtered ? 'inline' : 'none'};
        letter-spacing: 0.12rem;

        &:hover,
        &:focus {
           text-decoration: underline;
        }
    }
`

const ComponentListingPage: React.FC<ComponentListPageI> = ({data}) => {
    const {edges} = data.allMdx;
    const {theme} = useContext(PageContext)
    const [filtered, setIsFiltered] = useState<string>('init');

    return(
        <Layout header="component listing">
            <FilterBanner data={edges} setIsFiltered={setIsFiltered}/>
            <div style={{marginTop: '60px'}}>
                <h2> Component Listing</h2>
                <ul>
                    {edges instanceof Array && edges.map(node => {
                        return (
                            <StyledListItem key={node.info.id} filtered={node.info.frontmatter.tag === filtered || filtered === 'init'} theme={theme}>
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