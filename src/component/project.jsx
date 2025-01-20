import React from 'react'
import './project.css'

export default function Project() {
  return (
    <section id="projects">
    <div class="project-container">
      <h1>PROJECTS</h1>
      <div class="projects">
        <div class="project-box">
          <img src="src\img\profile.png" alt="Project 1" />
          <h2>Project 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            excepturi sapiente, consequatur, ducimus odit quis, tempora
            mollitia cum sint libero vel molestias consequuntur voluptate
            beatae laudantium quibusdam laboriosam illum aliquam.
          </p>
          <button>GitHub</button>
        </div>
        <div class="project-box">
          <img src="src\img\profile.png" alt="Project 2" />
          <h2>Project 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            excepturi sapiente, consequatur, ducimus odit quis, tempora
            mollitia cum sint libero vel molestias consequuntur voluptate
            beatae laudantium quibusdam laboriosam illum aliquam.
          </p>
          <button>GitHub</button>
        </div>
      </div>
    </div>
  </section>
  )
}
