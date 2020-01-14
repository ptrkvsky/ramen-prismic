import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
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
`
const ContentPresentation = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: ${theme.maxWidth};

  .gatsby-image-wrapper {
    top: -28px;
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
  font-family: ${theme.fonts.secondary};
  font-size: 3.5rem;
  color: ${theme.colors.headline};
  line-height: 5rem;
`

const ParaPresentation = styled("p")`
  margin-top: 3rem;
  font-size: 2rem;
  line-height: 3.5rem;
  font-weight: 400;
  color: ${theme.colors.paragraph};
  text-align: justify;
  max-width: 500px;
`

/*
 * SECTION 2
 */

const SectionListing = styled("section")`
  padding: 5.5rem 0;
  @media (max-width: ${theme.breakpoints.s}) {
    padding: 4rem 0.75rem 7rem;
  }
`

const ConteneurListing = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5rem;
  @media (max-width: ${theme.breakpoints.s}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${theme.breakpoints.s}) {
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
  }
`

const TitreListing = styled("h2")`
  margin-bottom: 5rem;
  font-size: 3rem;
  color: ${theme.colors.tertiary};
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
              Test branch
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
      <BackgroundImage
        Tag="section"
        fluid={data.background_listing.childImageSharp.fluid}
      >
        <SectionListing className="content-center">
          <TitreListing>Les dernières recettes pour vos ramens</TitreListing>
          <ConteneurListing>
            {recettes.map((recette, i) => (
              <RecetteCard
                key={i}
                titreRecette={recette.data.titre_recette.text}
                descriptionCourte={recette.data.description_courte.html}
                vignette={recette.data.vignette.localFile.childImageSharp.fixed}
                uid={recette.uid}
              />
            ))}
          </ConteneurListing>
        </SectionListing>
      </BackgroundImage>
      {/* 
      <TransitionLink
        to="/page-2/"
        exit={exitTransition}
        entry={entryTransition}
      >
        Go to page 2
      </TransitionLink>
      */}
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  {
    allPrismicArticle {
      nodes {
        uid
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
                fixed(height: 360, width: 360) {
                  ...GatsbyImageSharpFixed
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
    background_listing: file(relativePath: { eq: "background_listing.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
