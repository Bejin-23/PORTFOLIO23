import React from 'react'
import './nav.css'

export default function Nav() {
  return (

    <header>
    <h1 class="logo">BEJIN BELLARMIN</h1>
    <nav>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
    <a href="#contact" class="cta"><button>Contact Me</button></a>
  </header>
  )
}
