import React from "react"
import styled from "@emotion/styled"
import theme from "../../styles/theme"

const TitreSommaire = styled("div")`
  max-width: 740px;
  margin: 4.5rem auto 3.5rem;
  @media (max-width: ${theme.breakpoints.xs}) {
    margin: 2.5rem auto 1.5rem;
  }

  font-family: ${theme.fonts.secondary};
  font-weight: 500;
  font-size: 3.2rem;
  text-transform: uppercase;
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
