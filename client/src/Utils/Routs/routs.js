import React from 'react'
import Layout from '../../components/Layout/layout'
import About from '../../pages/About/about'
import Techstack from '../../pages/Techstack/techstack'
import Projects from '../../pages/Projects/projects'
import Education from '../../pages/Education/education'
import WorkExp from '../../pages/work_exp/workExp'
import Contact from '../../pages/contact/contact'
import Tada from 'react-reveal/Tada';



const Routs = () => {
  return (
    <>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <Tada>

        <div className="footer mt-5 pb-5 ms-3">
          <h5 className='text-center'> Made with 🐾 sanskar &copy; 2025</h5>

        </div>
        </Tada>
    </>
  )
}

export default Routs