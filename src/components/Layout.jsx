/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import { theme, globalStyles } from "../styles"

import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer className="content-center">
          © {new Date().getFullYear()}, Construit avec amour,
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> et{" "}
          <a href="https://www.prismic.io">Prismic</a>
        </footer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
