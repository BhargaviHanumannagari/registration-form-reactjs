// Write your JS code here
import React, {useState} from 'react'

function RegistrationForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [registrationFormComponent, setRegistrationFormComponent] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleFirstNameChange = event => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = event => {
    setLastName(event.target.value)
  }

  const handleRegistrationFormComponentChange = event => {
    setRegistrationFormComponent(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (!firstName || !lastName || !registrationFormComponent) {
      setErrorMessage('required')
    } else {
      // submit the form
      console.log(
        `Submitted: ${firstName} ${lastName} ${registrationFormComponent}`,
      )
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <label htmlFor="registrationFormComponent">
          Registration Form Component:
        </label>
        <input
          type="text"
          id="registrationFormComponent"
          name="registrationFormComponent"
          value={registrationFormComponent}
          onChange={handleRegistrationFormComponentChange}
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Submit</button>
    </form>
  )
}

export default RegistrationForm
