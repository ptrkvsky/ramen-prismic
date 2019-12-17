import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from '@emotion/styled'

import theme from '../styles/theme'


const MainTitle = styled('div')`
  margin: 0;
  font-family: "Bangers";
  a{
    color: ${theme.colors.primary};
    font-size: 2.75rem;
  }
`

const ContentCenter = styled('div')`
    margin: 0 auto;
    max-width: 960;
    padding: 1.45rem 1.0875rem;
`

const BlocHeader = styled('header')`
  margin-bottom: 1.45rem;
`


const Header = ({ siteTitle }) => (
  <BlocHeader>
    <ContentCenter>
      <MainTitle>
        <Link to="/">
          {siteTitle}
        </Link>
      </MainTitle>
    </ContentCenter>
  </BlocHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
