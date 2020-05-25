import React from "react"
import Img from "gatsby-image"
import { RichText } from "prismic-reactjs";

export default ({ slice }) => {
  console.log(slice)
  return (
    <div className="section_image_droite">
      <div
        className="texte_a_gauche"
      >
        {RichText.render(slice.fields[0].texte_a_gauche)}
      </div>
      <div className="image_a_droite">
        <Img
          fluid={slice.fields[0].image_a_droiteSharp.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}
