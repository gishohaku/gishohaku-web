/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

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
              frontmatter {
                title
                subtitle
                path
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
      const path = post.node.frontmatter.path
      createPage({
        path,
        component: markdownPage,
        context: {
          pagePath: path
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