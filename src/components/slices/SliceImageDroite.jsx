import React from "react"
import Img from "gatsby-image"

export default ({ slice }) => {
  return (
    <div className="section_image_droite">
      <div
        className="texte_a_gauche"
        dangerouslySetInnerHTML={{ __html: slice.items[0].texte_a_gauche.html }}
      />
      <div className="image_a_droite">
        <Img
          fluid={slice.items[0].image_a_droite.localFile.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}
