import React from "react"
import styled from "@emotion/styled"
import theme from "../../styles/theme"
import { Link } from "react-scroll"

const SectionSommaire = styled("div")`
  max-width: 740px;
  padding: 4rem;
  margin-bottom: 7rem;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;

  border-radius: 1rem;
  border: 3px solid ${theme.colors.primary};

  font-size: 2.4rem;

  .titre-sommaire {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-family: ${theme.fonts.secondary};
    text-align: center;
  }

  .list-sommaire {
    margin: 4rem 0 0 10rem;
  }

  ol {
    list-style: decimal;
  }

  .item-sommaire {
    color: ${theme.colors.paragraph};
    font-size: 2.4rem;
    line-height: 1.5;
    font-weight: normal;
    font-style: normal;
    &:hover {
      color: ${theme.colors.primary};
      text-decoration: none;
      cursor: pointer;
    }
  }
`

export default ({ slice }) => {
  return (
    <SectionSommaire className="section_sommaire">
      <h2 className="titre-sommaire">🍜 Étapes de la préparation</h2>
      <nav className="list-sommaire">
        <ol>
          {slice.items.map(function(item) {
            return (
              <li>
                <Link
                  className="item-sommaire"
                  activeClass="active"
                  to={item.id_item_sommaire}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.id_item_sommaire}
                </Link>
              </li>
            )
          })}
        </ol>
      </nav>
    </SectionSommaire>
  )
}
