const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicArticle {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/articles.jsx")

  pages.data.allPrismicArticle.edges.forEach(edge => {
    createPage({
      path: `/recettes/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
