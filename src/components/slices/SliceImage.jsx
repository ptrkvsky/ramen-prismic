import React from "react"
import Img from "gatsby-image"

export default ({ slice }) => {
  return (
    <div className="section_image">
      <Img
        fluid={slice.primary.section_image.localFile.childImageSharp.fluid}
      />
    </div>
  )
}
