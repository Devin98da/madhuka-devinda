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
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// import classes from './nav.module.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isMobile, setisMobile] = useState(false);

  const mouseEnterHandler = () => {
    setIsDropDownVisible(true);
  }

  const mouseLeaveHandler = () => {
    setIsDropDownVisible(false);
  }

  const hambergerClickHandler = () => {
    setisMobile(!isMobile);
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

    <React.Fragment>
      <div className="container navbar">
        <div className='navlinks'>
          <Link className='link' to='/'>Home</Link>

          <div class="dropdown">
            <button class="dropbtn">Personal Projects
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Dropdown projects={ProjectsData} />
            </div>
          </div>
          <Link className='link' to='/about-resume'>About & Resume</Link>
        </div>
        <div className='hamberger' onClick={hambergerClickHandler}>
          {isMobile ? <AiOutlineClose /> : <GiHamburgerMenu />}

        </div>

        <div className='socials'>
          <a className='social' href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
          <a className='social' href='https://github.com' target='_blank'><FaGithub /></a>
          <a className='social' href='https://dribble.com' target='_blank'><FiDribbble /></a>
        </div>

      </div>
      {
        <div className={`nav_links_mobile ${isMobile ? 'open' : ''}`}>
          <Link className='link' to='/'>Home</Link>

          <div class="dropdown">
            <button class="dropbtn">Personal Projects
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Dropdown projects={ProjectsData} />
            </div>
          </div>
          <Link className='link' to='/about-resume'>About & Resume</Link>
        </div>
      }

    </React.Fragment>
  )
}

export default Nav