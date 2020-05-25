import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const SectionImage = styled("div")`
  margin-bottom: 4.5rem;
`

export default ({ slice }) => {
  console.log(slice.primary.section_imageSharp.childImageSharp.fluid)
  return (
    <SectionImage>
      <Img
        fluid={slice.primary.section_imageSharp.childImageSharp.fluid}
      />
    </SectionImage>
  )
}
