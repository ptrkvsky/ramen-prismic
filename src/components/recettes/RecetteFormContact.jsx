import React from "react"
class FormContact extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)

    this.state = {
      formControls: {
        pseudo: {
          value: "",
        },
        message: {
          value: "",
        },
      },
    }
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value,
        },
      },
    })
    const valueTrimed = event.target.value.trim()

    //We try to know what previous elt is, if its "block item form", its not the first elt so we can add a margin
    const prevElement = event.target.parentNode.previousSibling

    //if input is not empty
    if (valueTrimed && prevElement.classList.contains("block-item-form")) {
      event.target.parentNode.classList.add("valid-input")
    } else {
      //event.target.parentNode.classList.remove("valid-input");
    }

    //Finally we test our states to know if the whole form is valid
    if (
      document.getElementById("message").value.trim() &&
      document.getElementById("pseudo").value.trim()
    ) {
      document.querySelector(".submit").classList.add("valid-submit")
      document.getElementById("heart").classList.add("animated")
      document.getElementById("sad").classList.add("hide")
    } else {
      document.querySelector(".submit").classList.remove("valid-submit")
      document.getElementById("heart").classList.remove("animated")
      //document.getElementById('sad').classList.remove("hide")
    }
  }

  handleFocus(event) {
    event.target.parentNode.classList.add("valid-input")
  }

  handleBlur(event) {
    //If field is empty when i loose focus, i remove the class adding space
    const value = event.target.value.trim()
    if (!value) {
      event.target.parentNode.classList.remove("valid-input")
    }
  }

  handleSubmit(event) {
    if (
      document.getElementById("message").value.trim() &&
      document.getElementById("pseudo").value.trim()
    ) {
      document.getElementById("sad").classList.add("hide")
    } else {
      document.getElementById("sad").classList.remove("hide")
      event.preventDefault()
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form-comment"
        action="/thankyou"
        name={this.props.formName}
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input
          className=""
          type="hidden"
          name="form-name"
          value={this.props.formName}
        />
        <p class="d-none">
          <label>
            Pour mes amis les robots : <input name="bot-field" />
          </label>
        </p>

        <div className="block-item-form">
          <input
            id="pseudo"
            value={this.state.formControls.pseudo.value}
            onChange={this.handleChange}
            className="item-form item-input"
            name="pseudo"
            required
            type="text"
            onChange={this.handleChange}
          />
          <label className="label-name">
            <span className="content-name">Mon pseudo sympa</span>
          </label>
        </div>

        <div className="block-item-form">
          <textarea
            id="message"
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            className="item-form item-textarea"
            name="message"
            required
          ></textarea>
          <label className="label-name">
            <span className="content-name">Mon message d'amour</span>
          </label>
        </div>
        <input type="submit" className="submit" value="Envoyer" />
        <div className="heart" id="heart"></div>
        <div className="sad hide" id="sad">
          (⌯˃̶᷄ ﹏ ˂̶᷄⌯)ﾟ
        </div>
      </form>
    )
  }
}
export default FormContact
