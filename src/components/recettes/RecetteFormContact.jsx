import React from "react"
import axios from "axios"
import * as qs from "query-string"
import theme from "../../styles/theme"

import styled from "@emotion/styled"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactWrapper = styled("div")`
  margin-top: 60px;
  padding: 60px;
  width: 800px;
  max-width: 100%;
  border-top: 10px solid ${theme.colors.paragraph};
`

const Hidden = styled("p")`
  display: none;
`

const Title = styled("h2")`
  margin: 0 0 40px 0;
  text-align: center;
  font-weight: 200;
  font-style: italic;
  font-size: 80px;
  color: #000;
`
const InputTxt = styled("input")`
  display: block;
  padding-left: 20px;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #000;
  font-size: 18px;
  line-height: 26px;
  &:focus {
    outline: none;
  }
  &:focus,
  &.not-empty {
    + .label {
      transform: translateY(-24px);
    }
  }
`

const Label = styled("label")`
  position: absolute;
  left: 20px;
  bottom: 11px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: #888;
  cursor: text;
  transition: transform 0.2s ease-in-out;
`

const FormField = styled("div")`
  position: relative;
  margin: 32px 0;
`
const FormResponse = styled("p")`
  text-align: center;
  font-weight: bold;
`

const SubmitButton = styled("input")`
  display: inline-block;
  padding: 10px 15px;
  margin-top: 40px;
  color: #fff;
  font-weight: 200;
  font-size: 18px;
  text-decoration: none;
  border: none;
  background: #000;
  transition: background-color 0.3s linear;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`

class SectionContact extends React.Component {
  static HandleKey(event) {
    // J'ajoute une classe si mon champ est vide yes
    const target = event.target

    if (target.value.trim()) {
      target.classList.add("not-empty")
    } else {
      target.classList.remove("not-empty")
    }
  }

  constructor(props) {
    super(props)
    this.domRef = React.createRef()
    this.state = { feedbackMsg: null }
  }

  handleSubmit(event) {
    const formData = {}
    Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

    this.setState({
      feedbackMsg: "Form could not be submitted.",
    })

    event.preventDefault()
    const contactForm = document.querySelector("#contact-form")
    fetch(contactForm.getAttribute("action"), {
      method: "POST",
      headers: {
        Accept: "application/x-www-form-urlencoded;charset=UTF-8",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: qs.stringify(formData),
    }).then(res => {
      if (res) {
        this.setState({
          feedbackMsg: "Merci votre message a bien été transmis.",
        })
      } else {
        this.setState({
          feedbackMsg: "Terrible nouvelle votre message n'a pu être transmis.",
        })
      }
    })
  }

  render() {
    const { feedbackMsg } = this.state
    return (
      <div className="section section3 contact" data-anchor="contact">
        <ContactWrapper>
          <form
            action="/"
            id="contact-form"
            ref={this.domRef}
            name="Contact Form"
            method="POST"
            data-netlify="true"
            onSubmit={event => this.handleSubmit(event)}
            netlify-honeypot="bot-field"
          >
            <Hidden>
              <label>
                Ne pas remplir si pas humain :
                <input name="bot-field" />
              </label>
            </Hidden>
            <input
              ref="form-name"
              type="hidden"
              name="form-name"
              value="Contact Form"
            />

            <Title>Contact</Title>
            {feedbackMsg && <FormResponse>{feedbackMsg}</FormResponse>}
            <FormField>
              <InputTxt
                ref="form-name"
                id="name"
                name="name"
                className="input-text js-input"
                type="text"
                required
                onKeyUp={SectionContact.HandleKey}
              />
              <Label className="label" htmlFor="name">
                Nom
              </Label>
            </FormField>
            <FormField>
              <InputTxt
                ref="email"
                onKeyUp={SectionContact.HandleKey}
                id="email"
                name="email"
                type="email"
                required
              />
              <Label className="label" htmlFor="email">
                E-mail
              </Label>
            </FormField>
            <FormField>
              <InputTxt
                ref="message"
                name="message"
                onKeyUp={SectionContact.HandleKey}
                id="message"
                type="text"
                required
              />
              <Label className="label" htmlFor="message">
                Votre message
              </Label>
            </FormField>
            <FormField>
              <SubmitButton
                className="submit-btn"
                type="submit"
                value="Envoyer"
              />
            </FormField>
          </form>
        </ContactWrapper>
      </div>
    )
  }
}

export default SectionContact
