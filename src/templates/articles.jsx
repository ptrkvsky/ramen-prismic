import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

import RecetteSlices from "../components/recettes/RecetteSlices"

const Article = ({ data: { prismicArticle } }) => {
  const { data } = prismicArticle
  console.log(data.body)
  return (
    <Layout>
      <SEO title={data.titre_recette.text} />
      <h1>{data.titre_recette.text}</h1>
      <RecetteSlices slices={data.body} />
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object,
}

export default Article
export const pageQuery = graphql`
  query ArticleBySlug($uid: String) {
    prismicArticle(uid: { eq: $uid }) {
      data {
        meta_title
        titre_recette {
          html
          text
        }
        body {
          ... on PrismicArticleBodyImage {
            id
            primary {
              section_image {
                alt
                copyright
                url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            slice_type
          }
          ... on PrismicArticleBodyText {
            id
            slice_type
            items {
              texte_a_droite {
                html
              }
              image_a_gauche {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          ... on PrismicArticleBodyRichText {
            id
            slice_type
            primary {
              rich_text {
                html
                text
              }
            }
          }
          ... on PrismicArticleBodySectionImage2 {
            id
            slice_type
            items {
              image_a_droite {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              texte_a_gauche {
                html
              }
            }
          }
        }
      }
      uid
    }
  }
`
