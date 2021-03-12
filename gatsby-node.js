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
                        }
                        slug
                    }
                }
            }
        }
    `)

    res.data.allMdx.edges.forEach(({node}) => {
        console.log('%c [node]', 'color:orange; background: purple', node)
        createPage({
            path: `component-listing/${node.slug}`,
            component: path.resolve(`./src/templates/criteria-template.jsx`),
            context: {
                slug: node.slug
            }
        })
    })
}
