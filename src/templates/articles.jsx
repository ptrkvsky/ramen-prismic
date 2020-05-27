import React from "react"
import { graphql } from "gatsby"
import { Link } from "react-scroll"
import { RichText } from "prismic-reactjs"

import styled from "@emotion/styled"
import theme from "../styles/theme"

import BackgroundImage from "gatsby-background-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

import RecetteSlices from "../components/recettes/RecetteSlices"
import FormContact from "../components/recettes/RecetteFormContact"

import "../styles/form.scss"

const HeroBanner = styled("section")`
  position: absolute;
  width: 100%;
  min-height: 60vh;

  .hero_banner {
    min-height: 60vh;
  }

  @media (max-width: ${theme.breakpoints.m}) {
    min-height: 50vh;
    .hero_banner {
      min-height: 50vh;
    }
  }
`

const ContentRecette = styled("section")`
  position: relative;
  z-index: 10;
  margin: 0 auto;
  max-width: ${theme.maxWidth};
  padding: 30vh 0 7rem 0;
  font-size: 2.4rem;

  p {
    margin-bottom: 3.5rem;
    line-height: 1.5;
  }

  ol {
    list-style: decimal;
    margin-bottom: 3.5rem;
    line-height: 1.5;
    @media (max-width: ${theme.breakpoints.xs}) {
      margin-left: 1.6rem;
    }
  }

  @media (max-width: ${theme.breakpoints.m}) {
    padding: 40vh 5rem 5rem;
  }
  @media (max-width: ${theme.breakpoints.xs}) {
    padding: 40vh 1rem 1rem;
  }
`

const GridPresentationRecette = styled("div")`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 40% 40%;
  padding-bottom: 7rem;

  @media (max-width: ${theme.breakpoints.m}) {
    grid-template-rows: auto;
    grid-template-columns: auto;
    padding-bottom: 0rem;
  }
`

const PresentationRecette = styled("section")`
  padding: 3.75rem 4rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  border-radius: 0.25rem;

  .lightTheme & {
    background-color: ${theme.colors.light.bg};
  }
  .darkTheme & {
    background-color: ${theme.colors.dark.bg};
  }

  @media (max-width: ${theme.breakpoints.m}) {
    padding: 1.75rem 2rem;
  }

  .titre-recette {
    font-size: 5rem;
    line-height: 5.5rem;
    font-family: ${theme.fonts.secondary};
    font-weight: 500;
    text-transform: uppercase;
    .lightTheme & {
      color: ${theme.colors.light.primary};
    }
    .darkTheme & {
      color: ${theme.colors.dark.primary};
    }
  }

  .sous-titre {
    margin-top: 1.75rem;

    font-size: 3.2rem;
    .lightTheme & {
      color: ${theme.colors.light.paragraph};
    }
    .darkTheme & {
      color: ${theme.colors.dark.paragraph};
    }
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

  @media (max-width: ${theme.breakpoints.m}) {
    position: relative;
  }

  display: inline-block;
  padding: 2rem 2.5rem;

  font-size: 2.5rem;
  font-family: ${theme.fonts.primary};
  line-height: 1.5;

  .lightTheme & {
    color: ${theme.colors.light.paragraph};
  }

  .darkTheme & {
    color: ${theme.colors.dark.paragraph};
  }

  border-radius: 0.25rem;
  text-align: center;
`

const Article = ({ data }) => {
  const { article } = data.prismic
  console.log(article)
  return (
    <Layout>
      <SEO title={`🍜 ${article.meta_title} | Ramen Noob`} />
      <HeroBanner>
        <BackgroundImage
          Tag="div"
          className="hero_banner"
          fluid={article.hero_imageSharp.childImageSharp.fluid}
        ></BackgroundImage>
      </HeroBanner>

      <ContentRecette>
        <GridPresentationRecette>
          <PresentationRecette>
            <h1 className="titre-recette">{article.titre_recette[0].text}</h1>
            <h2 className="sous-titre">Ingrédients :</h2>
            <div className="paragraph-card">
              {RichText.render(article.ingredients)}
            </div>
            <p className="sous-titre">Temps de préparation :</p>
            <p className="paragraph-card">
              {article.temps_de_preparation[0].text}
            </p>
          </PresentationRecette>
          <ConteneurCitation>
            <Citation>
              <div className="guillemets">{article.citation[0].text}</div>
            </Citation>
          </ConteneurCitation>
        </GridPresentationRecette>
        <p>
          Trop de blabla ? Retrouve la recette en quelques lignes en{" "}
          <Link
            className="item-sommaire"
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            bas de page.
          </Link>
        </p>
        <RecetteSlices slices={article.body} />
        <FormContact formName={article.titre_recette[0].text} />
      </ContentRecette>
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object,
}

export default Article
export const pageQuery = graphql`
  query ArticleBySlug($uid: String!) {
    prismic {
      article(uid: $uid, lang: "fr-fr") {
        titre_recette
        vignette
        description_courte
        ingredients
        temps_de_preparation
        hero_image
        hero_imageSharp {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
        citation
        meta_title
        meta_description
        _linkType
        body {
          ... on PRISMIC_ArticleBodyText {
            type
            label
            fields {
              image_a_gauche
              texte_a_droite
              image_a_gaucheSharp {
                childImageSharp {
                  fluid {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                  }
                }
              }
            }
          }
          ... on PRISMIC_ArticleBodySommaire {
            type
            label
            fields {
              id_item_sommaire
              item_sommaire
            }
          }
          ... on PRISMIC_ArticleBodyTitre_avec_sommaire {
            type
            label
            fields {
              hn_sommaire
              id_sommaire
            }
          }
          ... on PRISMIC_ArticleBodySection_image_2 {
            type
            label
            fields {
              image_a_droite
              texte_a_gauche
              image_a_droiteSharp {
                childImageSharp {
                  fluid {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                  }
                }
              }
            }
          }
          ... on PRISMIC_ArticleBodyRich_text {
            type
            label
            primary {
              rich_text
            }
          }
          ... on PRISMIC_ArticleBodyImage {
            type
            label
            primary {
              section_imageSharp {
                childImageSharp {
                  fluid {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                  }
                }
              }
              section_image
            }
          }
        }
      }
    }
  }
`
