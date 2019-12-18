import { css } from "@emotion/core"
import { theme, reset } from "../styles"

const globalStyles = css`
  ${reset}
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.headline};
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
  }
  body {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.greyDarker};
    background-color: ${theme.colors.bg};
  }
  ::selection {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.primary};
  }
  a {
    color: ${theme.colors.primary};
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    font-weight: 700;
    font-style: italic;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  .content-center {
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    @media (max-width: ${theme.breakpoints.s}) {
      padding: 0 0.75rem;
    }
  }

  @media (max-width: ${theme.breakpoints.m}) {
    body {
      font-size: 16px;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    h1 {
      font-size: 2.369rem;
    }
    h2 {
      font-size: 1.777rem;
    }
    h3 {
      font-size: 1.333rem;
    }
    h4 {
      font-size: 1rem;
    }
    h5 {
      font-size: 0.75rem;
    }
    h6 {
      font-size: 0.563rem;
    }
  }
`
export default globalStyles
