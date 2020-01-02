import React from "react"
import styled from "@emotion/styled"

const Section_rich_text = styled("div")`
  font-size: 2.4rem;
  max-width: 740px;
  margin-right: auto;
  margin-left: auto;
  p {
    margin-bottom: 3.5rem;
    line-height: 1.5;
  }
`

export default ({ slice }) => {
  return (
    <Section_rich_text
      className="section_rich_text"
      dangerouslySetInnerHTML={{
        __html: slice.primary.rich_text.html,
      }}
    />
  )
}
