import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const RecetteCard = ({ titreRecette, descriptionCourte, vignette, slug }) => {
  return (
    <article>
      <Link to={`/recettes/${slug}`}>
        <h2>{titreRecette}/</h2>
        <Img fluid={vignette} />
      </Link>
      <div dangerouslySetInnerHTML={{ __html: descriptionCourte }} />
    </article>
  )
}

RecetteCard.propTypes = {
  titreRecette: PropTypes.string,
  descriptionCourte: PropTypes.string,
}

export default RecetteCard
