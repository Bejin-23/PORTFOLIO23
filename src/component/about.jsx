import React from 'react'
import './about.css'

export default function About() {
  return (
    <section id="about">
    <div class="hero-container">
      <div class="image-container">
        <div class="circle">
          <img src="src\img\profile.png" alt="Profile Picture" />
        </div>
      </div>
      <div class="description-container">
        <h2>BEJIN BELLARMIN</h2>
        <h3>Web Designer | Programmer | Web Developer</h3>
        <p>
          I have a passion for the IT industry. Eager to launch a career where
          I can apply theoretical knowledge gained through coursework and
          contribute to innovative projects. Possess strong communication,
          teamwork, and problem-solving skills, with a keen willingness to
          learn and adapt. Excited to contribute positively to a dynamic work
          environment and grow professionally.
        </p>
        <button>Download My CV</button>
      </div>
    </div>
  </section>
  )
}
