import React from 'react'
import  './contact.css'

export default function Contact() {
  return (
    <section id="contact">
    <div class="form-container">
      <h2>Contact Us</h2>
      <form action="" class="form">
        <label for="name">Name:</label>
        <input type="text" id="name" required />
        <label for="email">Email:</label>
        <input type="email" id="email" required />
        <label for="message">Message:</label>
        <textarea id="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
  )
}
