import React from "react"
import styled from "@emotion/styled"

const TitreSommaire = styled("div")`
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
    <TitreSommaire
      id={slice.items[0].id_sommaire}
      className="titre_sommaire"
      dangerouslySetInnerHTML={{
        __html: slice.items[0].hn_sommaire.html,
      }}
    />
  )
}
