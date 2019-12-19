import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import TransitionLink from "gatsby-plugin-transition-link"

import styled from "@emotion/styled"
import theme from "../styles/theme"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import RecetteCard from "../components/recettes/RecetteCard"

/*
 * SECTION 1
 */
const SectionPresentation = styled("section")`
  padding: 0 0 7rem;
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
  font-size: 3.4rem;
  font-weight: 700;
  color: ${theme.colors.headline};
  line-height: 1.3;
`

const ParaPresentation = styled("p")`
  margin-top: 3rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${theme.colors.headline};
  text-align: justify;
  max-width: 500px;
  line-height: 1.7;
`

/*
 * SECTION 2
 */

const SectionListing = styled("section")`
  padding: 4rem 0 7rem;
`

const ConteneurListing = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${theme.breakpoints.s}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${theme.breakpoints.s}) {
    grid-template-columns: 1fr;
  }
`

const TitreListing = styled("h2")`
  margin-bottom: 2.5rem;

  font-size: 3rem;
  font-weight: 700;
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
      <SEO title="🍜 El famoso meilleur site de ramen" />

      <SectionPresentation>
        <ContentPresentation>
          <div className="col col-gauche">
            <TitrePresentation>
              Tout ce qu'il faut savoir pour réaliser des ramens !
            </TitrePresentation>
            <ParaPresentation>
              Ce blog a pour vocation de vous faire découvrir le monde
              merveilleux des ramens, ce plat japonais bien souvent méconnu en
              France. <br />
              Vous trouverez ici un ensemble de{" "}
              <span className="bold">recettes</span> que j'ai pu expérimenter au
              fil des ans.
            </ParaPresentation>
          </div>
          <div className="col col-droite">
            <Img
              fluid={data.illustration.childImageSharp.fluid}
              alt="Illustration bol de ramen"
              title="Illustration bol de ramen"
            />
          </div>
        </ContentPresentation>
      </SectionPresentation>

      <SectionListing className="content-center">
        <TitreListing>Les dernières recettes pour vos ramens</TitreListing>
        <ConteneurListing>
          {recettes.map((recette, i) => (
            <RecetteCard
              key={i}
              titreRecette={recette.data.titre_recette.text}
              descriptionCourte={recette.data.description_courte.html}
              vignette={recette.data.vignette.localFile.childImageSharp.fluid}
              slug={recette.slugs}
            />
          ))}
        </ConteneurListing>
      </SectionListing>

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
