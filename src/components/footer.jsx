import React from "react"

import styled from "@emotion/styled"
import theme from "../styles/theme"

const BlockFooter = styled("footer")`
  padding: 50px 0;
  background-color: ${theme.colors.bgFooter};
  font-size: 2rem;
  color: ${theme.colors.tertiary};
  a {
    color: ${theme.colors.tertiary};
  }
`
const Footer = () => (
  <BlockFooter>
    <div className="content-center">
      © 2019 - {new Date().getFullYear()}, Construit avec amour,
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> et{" "}
      <a href="https://www.prismic.io">Prismic</a>
    </div>
  </BlockFooter>
)

export default Footer
