
import { createRoot } from 'react-dom/client'
import About from './component/about.jsx'
import Nav from './component/nav.jsx'
import Skills from './component/skills.jsx'
import Project from './component/project.jsx'
import Contact from './component/contact.jsx'
import Footer from './component/footer.jsx'


createRoot(document.getElementById('root')).render(
<>
<Nav></Nav>
<About></About>
<Skills></Skills>
<Project></Project>
<Contact></Contact>
<Footer></Footer>

</>

)
