import React, { useState } from 'react';
import css from '../pages/Contact.module.css';
import { validateForm, validateEmail } from '../helpers/helpers';

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!validateForm(message)) {
      setErrorMessage(
        `Message is required`
      );
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('Sent!');
  };

  return (
    <div>
        <h1 className={css.title}>Get in Touch</h1>
        <form className={css.form}>
            <div className={css.formElement}>
                <label for='name'>Name: </label>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    style={{width: "100%", padding: '5px'}}
                />
            </div>
            <div className={css.formElement}>
                <label for='email'>Email: </label>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    style={{width: "100%", padding: '5px'}}
                />
            </div>
            <div className={css.formElement}>
                <label for='message'>Message: </label>
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    style={{width: "100%", padding: '5px'}}
                />
            </div>
            <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
      {errorMessage && (
        <div>
          <p className={css.title}>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
