import React from 'react'
import './portfolio.css';

import { Link } from 'react-router-dom';
import { ProjectsData } from '../ProjectsData';

const portfolio = () => {
  return (
    <section id='portfolio'>
      {/* <h5>My Recent Work</h5> */}
      <h2>Personal Projects</h2>

      <div className="container portfolio__container">
        {
          ProjectsData.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>More...</a> */}
                  <Link to={`/projects/${title}`} className='btn btn-primary'>More....</Link>
                </div>
              </article>
            )
          })
        }

      </div>


    </section>
  )
}

export default portfolio