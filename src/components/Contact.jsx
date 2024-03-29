import React, { useState } from 'react';
import axios from 'axios';
import { useMessage } from '../contexts/MessageContext';
import GithubIcon from './icons/Github';
import LinkedinIcon from './icons/Linkedin';
import { API_URL } from '../constants';

function Contact() {
  const { setMessage } = useMessage();
  const [inputs, setInputs] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/email`, inputs)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Server Error.');
        }

        setMessage({ error: false, text: 'Message sent successfully!' });
        setInputs({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setMessage({ error: true, text: 'Opps! Something went wrong.' });
      });
  };

  return (
    <div className="m-auto w-full p-4">
      <div className="flex gap-2">
        <a
          className="group"
          href="https://www.linkedin.com/in/laythalqadhi"
          target="_blank"
          aria-label="LinkedIn"
          rel="noreferrer"
        >
          <LinkedinIcon className="transform-all fill-neutral-900 duration-500 group-hover:fill-yellow-600 dark:fill-neutral-100" />
        </a>
        <a
          className="group"
          href="https://github.com/LaythAlqadhi"
          target="_blank"
          aria-label="GitHub"
          rel="noreferrer"
        >
          <GithubIcon className="transform-all fill-neutral-900 duration-500 group-hover:fill-yellow-600 dark:fill-neutral-100" />
        </a>
      </div>
      <form className="my-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          maxLength="25"
          required
        />
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          required
        />
        <label className="sr-only" htmlFor="message">
          Message
        </label>
        <textarea
          className="input"
          id="message"
          name="message"
          placeholder="Message"
          rows="6"
          value={inputs.message}
          onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
          maxLength="5000"
          required
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
