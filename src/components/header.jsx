import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Switch from "react-switch"

import styled from "@emotion/styled"
import theme from "../styles/theme"

import { myContext } from "../../provider"

const BlocHeader = styled("header")`
  .lightTheme & {
    background-color: ${theme.colors.light.primary}; 
    /* border-bottom: 10px solid ${theme.colors.light.primary}; */
  }

  .darkTheme & {
    background-color: ${theme.colors.dark.bgAlt};
    border-bottom: 10px solid ${theme.colors.dark.primary};
  }
`
const ContentCenter = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${theme.maxWidth};
  padding: 1.45rem 1.0875rem;
`

const MainTitle = styled("div")`
  margin: 0;
  font-family: "Bangers";
  a {
    .lightTheme & {
      color: ${theme.colors.light.bg};
      text-decoration: none;
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
          </MainTitle>
          <Switch
            offColor={theme.colors.light.paragraph}
            onColor={theme.colors.dark.primary}
            onChange={() => context.changeTheme()}
            checked={context.isDark === true}
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            aria-label="Changer le theme du site"
          />
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
