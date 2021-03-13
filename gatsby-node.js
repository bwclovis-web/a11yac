const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions;

    if (node.internal.type === 'Mdx') {
        const slug = createFilePath({node, getNode, basePath: `posts`})

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const res = await graphql(`
        query slugQuery {
            allMdx {
                edges {
                    node {
                        frontmatter {
                            title
                            description
                            criteria
                        }
                        id
                        body
                        slug
                    }
                }
            }
        }
    `)

    res.data.allMdx.edges.forEach(({node}) => {
        createPage({
            path: `component-listing/${node.slug}`,
            component: path.resolve(`./src/templates/criteria-template.tsx`),
            context: {
                slug: node.slug,
                criteria: node
            }
        })
    })
}
