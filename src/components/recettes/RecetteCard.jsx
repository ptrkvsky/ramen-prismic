import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

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
  padding: 2rem;
  background-color: ${theme.colors.bgCard};
  color: ${theme.colors.paragraphCard};
`
const TitreRecette = styled("h2")`
  padding: 0 0 1.8rem;

  font-size: 2.2rem;
  font-weight: bold;
  color: ${theme.colors.headlineCard};
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

    background-color: ${theme.colors.buttonCardBg};
    font-weight: 600;
    color: ${theme.colors.buttonCardText};
    text-decoration: none;
    font-style: normal;
    :hover {
      background-color: ${theme.colors.tertiary};
    }
  }
`

const RecetteCard = ({ titreRecette, descriptionCourte, vignette, slug }) => {
  return (
    <Article>
      <Link className="f-zero d-block" to={`/recettes/${slug}`}>
        <Img
          fixed={vignette}
          alt={titreRecette}
          className="border-top-radius"
        />
      </Link>
      <BlocDesc className="border-bottom-radius">
        <TitreRecette>{titreRecette}</TitreRecette>
        <div dangerouslySetInnerHTML={{ __html: descriptionCourte }} />
        <ButtonLink>
          <Link to={`/recettes/${slug}`}>Miam Miam</Link>
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
