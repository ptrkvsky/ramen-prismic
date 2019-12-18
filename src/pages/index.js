import React from "react"
import Img from "gatsby-image"
import TransitionLink from "gatsby-plugin-transition-link"

import styled from "@emotion/styled"
import theme from "../styles/theme"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import RecetteCard from "../components/recettes/RecetteCard"

const SectionPresentation = styled("section")`
  padding: 2rem 0;
  background-color: ${theme.colors.bgSnd};
`
const ContentPresentation = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: ${theme.maxWidth};

  .gatsby-image-wrapper {
    width: 512px;
    max-width: 100%;
  }

  .col {
    width: 50%;
    @media (max-width: ${theme.breakpoints.s}) {
      width: 100%;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    flex-direction: column;
    padding: 0 0.75rem;
  }
`
const TitrePresentation = styled("h1")`
  font-size: 3.2rem;
  font-weight: 700;
  color: ${theme.colors.headline};
`

const ParaPresentation = styled("p")`
  margin-bottom: 2rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${theme.colors.headline};
`

const TRANSITION_LENGTH = 1.5

const exitTransition = {
  length: TRANSITION_LENGTH, // Take 1.5 seconds to leave
  trigger: () => console.log("We are exiting"),
}

const entryTransition = {
  delay: TRANSITION_LENGTH, // Wait 1.5 seconds before entering
  trigger: () => console.log("We are entering"),
}

const IndexPage = ({ data }) => {
  console.log(data.illustration.childImageSharp.fluid)
  const recettes = data.allPrismicArticle.nodes
  if (!recettes) return null

  return (
    <Layout>
      <SEO title="El famoso meilleur site de ramen" />
      <SectionPresentation>
        <ContentPresentation>
          <div className="col col-gauche">
            <TitrePresentation>Les recettes de ramens</TitrePresentation>
            <ParaPresentation>
              Découvrez toute la magie des ramens à travers ces succulentes
              recettes.
            </ParaPresentation>
          </div>
          <div className="col col-droite">
            bloc image droite
            <Img
              fluid={data.illustration.childImageSharp.fluid}
              alt="Illustration bol de ramen"
              title="Illustration bol de ramen"
            />
          </div>
        </ContentPresentation>
      </SectionPresentation>
      {recettes.map((recette, i) => (
        <RecetteCard
          key={i}
          titreRecette={recette.data.titre_recette.text}
          descriptionCourte={recette.data.description_courte.html}
          vignette={recette.data.vignette.localFile.childImageSharp.fluid}
          slug={recette.slugs}
        />
      ))}

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
                fluid(maxWidth: 500) {
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
    illustration: file(relativePath: { eq: "illustration-ramen-bol.png" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
