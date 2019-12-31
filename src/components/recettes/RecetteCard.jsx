import React from "react"
import Img from "gatsby-image"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import styled from "@emotion/styled"
import theme from "../../styles/theme"

import PropTypes from "prop-types"

const Article = styled("article")`
  position: relative;
  min-height: 175px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.006),
    0 6.7px 5.3px rgba(0, 0, 0, 0.008), 0 12.5px 10px rgba(0, 0, 0, 0.01),
    0 22.3px 17.9px rgba(0, 0, 0, 0.012), 0 41.8px 33.4px rgba(0, 0, 0, 0.014),
    0 100px 80px rgba(0, 0, 0, 0.02);
`
const BlocDesc = styled("div")`
  display: block;
  min-height: 190px;
  padding: 3rem 2.5rem;

  font-size: 1.6rem;
  line-height: 2.4rem;

  background-color: ${theme.colors.tertiary};
`
const TitreRecette = styled("h2")`
  min-height: 6rem;
  padding: 0 0 1.5rem;

  font-family: ${theme.fonts.secondary};
  font-size: 2.4rem;
  color: ${theme.colors.primary};
  text-transform: uppercase;

  @media (max-width: ${theme.breakpoints.s}) {
    min-height: 0;
  }
`

const ButtonLink = styled("div")`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  a {
    display: inline-block;
    padding: 0.75rem 1.25rem;
    margin-top: 1.5rem;
    border-radius: 3px;

    background-color: ${theme.colors.primary};
    font-weight: 600;
    color: ${theme.colors.tertiary};
    text-decoration: none;
    font-style: normal;
    :hover {
      background-color: ${theme.colors.paragraph};
    }
  }
`

const RecetteCard = ({ titreRecette, descriptionCourte, vignette, uid }) => {
  return (
    <Article>
      <AniLink
        duration={0.6}
        hex={theme.colors.bgSnd}
        paintDrip
        className="f-zero d-block"
        to={`/recettes/${uid}`}
      >
        <Img
          fixed={vignette}
          alt={titreRecette}
          className="border-top-radius"
        />
      </AniLink>
      <BlocDesc className="border-bottom-radius">
        <TitreRecette>{titreRecette}</TitreRecette>
        <div dangerouslySetInnerHTML={{ __html: descriptionCourte }} />
        <ButtonLink>
          <AniLink fade to={`/recettes/${uid}`}>
            Miam Miam
          </AniLink>
        </ButtonLink>
      </BlocDesc>
    </Article>
  )
}

RecetteCard.propTypes = {
  titreRecette: PropTypes.string,
  descriptionCourte: PropTypes.string,
}

export default RecetteCard
