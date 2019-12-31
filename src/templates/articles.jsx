import React from "react"
import { graphql } from "gatsby"

import styled from "@emotion/styled"
import theme from "../styles/theme"

import BackgroundImage from "gatsby-background-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

import RecetteSlices from "../components/recettes/RecetteSlices"

const HeroBanner = styled("section")`
  position: absolute;
  z-index: -1;
  width: 100%;
  min-height: 60vh;

  .hero_banner {
    min-height: 60vh;
  }
`

const ContentRecette = styled("section")`
  margin: 0 auto;
  max-width: ${theme.maxWidth};
  padding-top: 30vh;
`

const GridPresentationRecette = styled("div")`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 40% 40%;

  padding-bottom: 7rem;
`

const PresentationRecette = styled("section")`
  background-color: ${theme.colors.bgSnd};
  padding: 3.75rem 4rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  border-radius: 0.25rem;

  .titre-recette {
    color: ${theme.colors.primary};
    font-size: 5rem;
    line-height: 5.5rem;
    font-family: ${theme.fonts.secondary};
    font-weight: 400;
    text-transform: uppercase;
  }

  .sous-titre {
    margin-top: 1.75rem;

    color: ${theme.colors.paragraph};
    font-size: 3.2rem;
  }

  .paragraph-card {
    margin-top: 1.75rem;
    line-height: 1.6;
    font-size: 2.4rem;
    line-height: 3.5rem;
  }
`

const ConteneurCitation = styled("div")`
  position: relative;
`

const Citation = styled("div")`
  position: absolute;
  bottom: 0;
  right: 0;

  display: inline-block;
  padding: 2rem 2.5rem;

  color: ${theme.colors.tertiary};
  font-size: 2.5rem;
  font-family: ${theme.fonts.primary};
  line-height: 1.5;

  background: ${theme.colors.bgCard};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  border-radius: 0.25rem;
  text-align: center;
`

const Article = ({ data: { prismicArticle } }) => {
  const { data } = prismicArticle
  {
    /* console.log(data) */
  }
  return (
    <Layout>
      <SEO title={data.titre_recette.text} />
      <HeroBanner>
        <BackgroundImage
          Tag="div"
          className="hero_banner"
          fluid={data.hero_image.localFile.childImageSharp.fluid}
        ></BackgroundImage>
      </HeroBanner>

      <ContentRecette>
        <GridPresentationRecette>
          <PresentationRecette>
            <h1 className="titre-recette">{data.titre_recette.text}</h1>
            <h2 className="sous-titre">Ingrédients :</h2>
            <div
              className="paragraph-card"
              dangerouslySetInnerHTML={{ __html: data.ingredients.html }}
            />
            <p className="sous-titre">Temps de préparation :</p>
            <p className="paragraph-card">{data.temps_de_preparation}</p>
          </PresentationRecette>
          <ConteneurCitation>
            <Citation>
              <div className="guillemets">{data.citation.text}</div>
            </Citation>
          </ConteneurCitation>
        </GridPresentationRecette>

        <RecetteSlices slices={data.body} />
      </ContentRecette>
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
        temps_de_preparation
        citation {
          text
        }
        hero_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        ingredients {
          html
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
          ... on PrismicArticleBodySommaire {
            items {
              id_item_sommaire
              item_sommaire
            }
            slice_type
          }
          ... on PrismicArticleBodyTitreAvecSommaire {
            id
            slice_type
            items {
              hn_sommaire {
                html
              }
              id_sommaire
            }
          }
        }
      }
      uid
    }
  }
`
