/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const {
  createFilePath
} = require(`gatsby-source-filesystem`)

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions

  const markdownPage = path.resolve(`./src/templates/markdown-page.jsx`)
  return graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                subtitle
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // Create blog posts pages.
    const pages = result.data.allMarkdownRemark.edges

    pages.forEach((post, index) => {
      // const slug = post.node.fields.slug
      createPage({
        path: post.node.fields.slug,
        component: markdownPage,
        context: {
          slug: post.node.fields.slug
        },
      })
    })

    return null
  })
}

exports.onCreateWebpackConfig = ({
  actions
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.join(__dirname, "src")
      }
    }
  });
};

exports.onCreateNode = ({
  node,
  actions,
  getNode
}) => {
  const {
    createNodeField
  } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}