import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
  const [state, handleSubmit] = useForm("mrgvdrbe");
  if (state.succeeded) {
      return <p>I'll email you back as soon as I can!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='contactForm'>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder="Name..."
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />

      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email..."
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Message...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Contact;