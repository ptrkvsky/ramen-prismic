var fs = require("fs")
var dir = "./.cache/caches/gatsby-source-prismic-graphql"

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      prismic {
        allArticles {
          edges {
            node {
              _meta {
                uid
              }
            }
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/articles.jsx")

  pages.data.prismic.allArticles.edges.forEach(edge => {
    createPage({
      path: `/recettes/${edge.node._meta.uid}`,
      component: template,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })
}
