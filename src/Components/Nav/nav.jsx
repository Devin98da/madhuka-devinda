import React from 'react'
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import { ProjectsData } from '../ProjectsData';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

// import classes from './nav.module.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const mouseEnterHandler = () => {
    setIsDropDownVisible(true);
  }

  const mouseLeaveHandler = () => {
    setIsDropDownVisible(false);
  }

  return (
    // <div className="container nav__container">
    //   <nav>
    //     <Link to='/'>Home</Link>
    //     <Link>Professional Projects</Link>
    //     <Link onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
    //       Personal Projects
    //       {isDropDownVisible && <Dropdown projects={ProjectsData} />}

    //     </Link>
    //     <Link to='/about-resume' target='blank'>About & Resume</Link>
    //   </nav>
    // </div>

    <div className="container navbar">
      <div>
        <Link className='link' to='/madhuka-devinda'>Home</Link>

        {/* <div class="dropdown">
  <button class="dropbtn">Professional Projects
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <Dropdown projects={ProjectsData} />
  </div>
</div> */}

        <div class="dropdown">
          <button class="dropbtn">Personal Projects
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            {/* <a href="#">Link 1</a>
<a href="#">Link 2</a>
<a href="#">Link 3</a> */}
            <Dropdown projects={ProjectsData} />
          </div>
        </div>
        <Link className='link' to='/madhuka-devinda/about-resume' target='blank'>About & Resume</Link>
      </div>
      <div className='socials'>
        <a className='social' href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
        <a className='social' href='https://github.com' target='_blank'><FaGithub /></a>
        <a className='social' href='https://dribble.com' target='_blank'><FiDribbble /></a>
      </div>
    </div>

  )
}

export default Nav