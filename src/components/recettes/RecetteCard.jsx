import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import styled from "@emotion/styled"
import theme from "../../styles/theme"

import PropTypes from "prop-types"

const BlocDesc = styled("div")`
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
  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-top: 1.5rem;
    border-radius: 3px;

    background-color: ${theme.colors.buttonCardBg};
    font-weight: 500;
    color: ${theme.colors.buttonCardText};
    text-decoration: none;
    font-style: normal;
  }
`

const RecetteCard = ({ titreRecette, descriptionCourte, vignette, slug }) => {
  return (
    <article>
      <Link to={`/recettes/${slug}`}>
        <Img
          fluid={vignette}
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
    </article>
  )
}

RecetteCard.propTypes = {
  titreRecette: PropTypes.string,
  descriptionCourte: PropTypes.string,
}

export default RecetteCard
