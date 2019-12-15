import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import RecetteCard from "../components/recettes/RecetteCard"

const TRANSITION_LENGTH = 1.5

const exitTransition = {
  length: TRANSITION_LENGTH, // Take 1.5 seconds to leave
  trigger: () => Console.warn("We are exiting"),
}

const entryTransition = {
  delay: TRANSITION_LENGTH, // Wait 1.5 seconds before entering
  trigger: () => Console.log("We are entering"),
}

const IndexPage = ({ data }) => {
  const recettes = data.allPrismicArticle.nodes
  if (!recettes) return null

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Les recettes de ramens</h2>
      <p>
        Découvrez toute la magie des ramens à travers ces succulentes recettes.
      </p>
      {recettes.map((recette, i) => (
        <RecetteCard
          key={i}
          titreRecette={recette.data.titre_recette.text}
          descriptionCourte={recette.data.description_courte.html}
          vignette={recette.data.vignette.localFile.childImageSharp.fluid}
          slug={recette.slugs}
        />
      ))}

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <TransitionLink
        to="/page-2/"
        exit={exitTransition}
        entry={entryTransition}
      >
        Go to page 2
      </TransitionLink>
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  {
    allPrismicArticle {
      nodes {
        slugs
        data {
          description_courte {
            html
          }
          titre_recette {
            text
          }
          vignette {
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
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
