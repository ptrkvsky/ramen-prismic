import React from "react"
import Img from "gatsby-image"

export default ({ slice }) => {
  return (
    <div
      className="section_rich_text"
      dangerouslySetInnerHTML={{
        __html: slice.primary.rich_text.html,
      }}
    />
  )
}
