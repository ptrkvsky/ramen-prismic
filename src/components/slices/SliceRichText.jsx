import React from "react"
import styled from "@emotion/styled"
import { RichText } from "prismic-reactjs";

const Section_rich_text = styled("div")`
  max-width: 740px;
  margin-right: auto;
  margin-left: auto;
`

export default ({ slice }) => {

  return (
    <Section_rich_text
      className="section_rich_text"
    >
      {RichText.render(slice.primary.rich_text)}
    </Section_rich_text>
  )
}
