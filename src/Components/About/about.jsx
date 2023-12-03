import React from 'react'
import './about.css';
import Me from '../../Assets/me-about.jpg';
// import { FaAward } from 'react-icons/fa';
// import { FiUsers } from 'react-icons/fi';
// import { VscFolderLibrary } from 'react-icons/vsc';
import CTA from '../Header/CTA';

const about = ({ home }) => {

  let aboutContent = "";

  if (home) {
    aboutContent = <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={Me} alt='About Image' />
        </div>
      </div>

      <div className="about__content">
        {/* <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Pojects</h5>
            <small>2+ completed</small>
          </article>
        </div> */}
        <p>
          Hello! I'm Madhuka Devinda, a dedicated game developer with more than year of hands-on experience in creating immersive and engaging gaming experiences.
          My journey in the world of game development has been challenging and fun, and storytelling, design, developent and cutting-edge technology are the thngs that I loved.
        </p>
        {/* <p>
          In my more than one-year professional journey, I've had the opportunity to work on a diverse range of projects, each of project is heped to my growth as a game developer.
          From conceptualization to implementation, I've been involved in various aspects of game development, developing my coding skills, design, problem solving and story telling.
        </p>
        <p>
          My technical toolkit includes proficiency in Unity, C#, Adobe Photoshop, allowing me to bring ideas to life.
        </p>
        <p>
          I published my first 3D horror survival game on itch.io, and hope to publish more games in future.
        </p>
        <p>
          What sets me apart is not just my technical expertise but also my enthusiasm for innovation. I always need to explore new things in game development and designs.
          I am always eager to bring fresh and exciting ideas to the world with game mechanics and game stories.
        </p>
        <p>
          To me, game development is not just a profession; It's about creating worlds, telling stories, and providing players with unforgettable experiences.
          I am commited to contributing to the gaming industry and making a good positive impact through my work.
        </p>

        <p>
          Thank you for visiting my portfolio, and I look forward to the exciting challenges and opportunities that lie ahead in the world of game development!
        </p> */}

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>

    </div>
  } else {
    aboutContent = <div className="container about__container">
      <div className="resume_image">
        <div className='about_me_resume'>
          <div className="about_me_resume-image">
            <img src={Me} alt='About Image' />
          </div>

        </div>
        <CTA />
      </div>

      <div className="about__content">
        {/* <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Pojects</h5>
            <small>2+ completed</small>
          </article>
        </div> */}
        <p>
          Hello! I'm Madhuka Devinda, a dedicated game developer with more than year of hands-on experience in creating immersive and engaging gaming experiences.
          My journey in the world of game development has been challenging and fun, and storytelling, design, developent and cutting-edge technology are the thngs that I loved.
        </p>
        <p>
          In my more than one-year professional journey, I've had the opportunity to work on a diverse range of projects, each of project is heped to my growth as a game developer.
          From conceptualization to implementation, I've been involved in various aspects of game development, developing my coding skills, design, problem solving and story telling.
        </p>
        <p>
          My technical toolkit includes proficiency in Unity, C#, Adobe Photoshop, allowing me to bring ideas to life.
        </p>
        <p>
          I published my first 3D horror survival game on itch.io, and hope to publish more games in future.
        </p>
        <p>
          What sets me apart is not just my technical expertise but also my enthusiasm for innovation. I always need to explore new things in game development and designs.
          I am always eager to bring fresh and exciting ideas to the world with game mechanics and game stories.
        </p>
        <p>
          To me, game development is not just a profession; It's about creating worlds, telling stories, and providing players with unforgettable experiences.
          I am commited to contributing to the gaming industry and making a good positive impact through my work.
        </p>

        <p>
          Thank you for visiting my portfolio, and I look forward to the exciting challenges and opportunities that lie ahead in the world of game development!
        </p>

        {/* <a href='#contact' className='btn btn-primary'>Let's Talk</a> */}

      </div>

    </div>
  }

  return (
    <section id='about'>
      {/* <h5>get To Know</h5> */}
      <h2>About Me</h2>
      {aboutContent}
    </section>
  )
}

export default about