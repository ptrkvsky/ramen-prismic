import React from "react"
import Img from "gatsby-image"

export default ({ slice }) => {
  return (
    <div className="section_image_droite">
      <div
        className="texte_a_droite"
        dangerouslySetInnerHTML={{ __html: slice.items[0].texte_a_droite.html }}
      />
      <div className="image_a_gauche">
        <Img
          fluid={slice.items[0].image_a_gauche.localFile.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}
