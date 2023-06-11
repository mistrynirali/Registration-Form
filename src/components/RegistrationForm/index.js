import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSuccess: false,
    firstNameErr: false,
    lastNameErr: false,
  }

  onChangeFirstName = e => this.setState({firstName: e.target.value})

  onChangeLastName = e => this.setState({lastName: e.target.value})

  onSubmitForm = e => {
    e.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({isSuccess: true})
    } else {
      this.validateFirstName()
      this.validateLastName()
    }
  }

  validateFirstName = () => {
    const {firstName} = this.state

    if (firstName === '') {
      this.setState({firstNameErr: true})
    } else {
      this.setState({firstNameErr: false})
    }
  }

  validateLastName = () => {
    const {lastName} = this.state

    if (lastName === '') {
      this.setState({lastNameErr: true})
    } else {
      this.setState({lastNameErr: false})
    }
  }

  submitAnother = () => this.setState({isSuccess: false})

  renderRequiredText = () => <p className="required-text">Required</p>

  renderInputScreen = () => {
    const {firstName, lastName, firstNameErr, lastNameErr} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="name-input-field">
          <label className="input-labels" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            className={firstNameErr ? 'red-class' : ''}
            value={firstName}
            id="firstName"
            type="text"
            placeholder="First name"
            onChange={this.onChangeFirstName}
            onBlur={this.validateFirstName}
          />
          {firstNameErr ? this.renderRequiredText() : null}
        </div>
        <div className="name-input-field">
          <label className="input-labels" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            className={lastNameErr ? 'red-class' : ''}
            value={lastName}
            id="lastName"
            type="text"
            placeholder="Last name"
            onChange={this.onChangeLastName}
            onBlur={this.validateLastName}
          />
          {lastNameErr ? this.renderRequiredText() : null}
        </div>
        <button type="submit" className="orange-btn">
          Submit
        </button>
      </form>
    )
  }

  renderSuccessScreen = () => (
    <div className="success-screen">
      <img
        className="blue-tick"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        className="orange-btn success-btn"
        onClick={this.submitAnother}
        type="button"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSuccess} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Registration</h1>
        <div className="card-screen">
          {isSuccess ? this.renderSuccessScreen() : this.renderInputScreen()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
