import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "@emotion/styled"
import theme from "../styles/theme"

import { myContext } from "../../provider"

const BlocHeader = styled("header")`
  .lightTheme & {
    background-color: ${theme.colors.light.bg};
    border-bottom: 10px solid ${theme.colors.light.primary};
  }

  .darkTheme & {
    background-color: ${theme.colors.dark.bgAlt};
    border-bottom: 10px solid ${theme.colors.dark.primary};
  }
`
const ContentCenter = styled("div")`
  margin: 0 auto;
  max-width: ${theme.maxWidth};
  padding: 1.45rem 1.0875rem;
`

const MainTitle = styled("div")`
  margin: 0;
  font-family: "Bangers";
  a {
    .lightTheme & {
      color: ${theme.colors.light.primary};
    }

    .darkTheme & {
      color: ${theme.colors.dark.primary};
    }
    font-size: 4rem;
    font-style: normal;
    :hover {
      text-decoration: none;
    }
    @media (max-width: ${theme.breakpoints.l}) {
      font-size: 3.5rem;
    }
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 3rem;
    }
  }
`

const Header = ({ siteTitle }) => (
  <myContext.Consumer>
    {context => (
      <BlocHeader>
        <ContentCenter>
          <MainTitle>
            <Link to="/">{siteTitle}</Link>
            <button onClick={() => context.changeTheme()}>
              {context.isDark ? "Light" : "Dark"}
            </button>
          </MainTitle>
        </ContentCenter>
      </BlocHeader>
    )}
  </myContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
