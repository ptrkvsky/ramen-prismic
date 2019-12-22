import { css } from "@emotion/core"
import { theme, reset } from "../styles"

const globalStyles = css`
  ${reset}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.colors.headline};
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
  }
  body {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.paragraph};
    background-color: ${theme.colors.bg};
    font-size: 1.6rem;
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 1.4rem;
    }
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
  /* helpers */
  .d-block {
    display: block;
  }

  /* fonts */
  .bold {
    font-weight: 700;
  }

  .f-zero {
    font-size: 0;
  }

  .content-center {
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    @media (max-width: ${theme.breakpoints.s}) {
      padding: 0 0.75rem;
    }
  }

  .border-top-radius {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .border-bottom-radius {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`
export default globalStyles
