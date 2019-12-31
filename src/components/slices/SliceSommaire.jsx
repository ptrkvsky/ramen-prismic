import React from "react"
import styled from "@emotion/styled"

const SectionSommaire = styled("div")`
  font-size: 2.4rem;
  max-width: 740px;
  margin-right: auto;
  margin-left: auto;
  p {
    margin-bottom: 3.5rem;
  }
`

export default ({ slice }) => {
  return (
    <SectionSommaire className="section_sommaire">
      {slice.items.map(function(item) {
        return <a href={`#${item.id_item_sommaire}`}>{item.id_item_sommaire}</a>
      })}
    </SectionSommaire>
  )
}
