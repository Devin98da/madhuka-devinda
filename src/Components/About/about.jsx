import React from 'react'
import './about.css';
import Me from '../../Assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const about = () => {
  return (
    <section id='about'>
        <h5>get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt='About Image'/>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
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
            </div>

            <p>
            Innovative and passionate unity game developer 1+ years of experience in designing and developing engaging
            game features. Willing to write game stories and develop games based on those stories. Seeking to leverage
            my technical and creative skills to develop innovative and engaging games as an Intern at a game
            development studio.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>
    </section>
  )
}

export default about