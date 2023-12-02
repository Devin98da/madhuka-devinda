import React from 'react'
import './OlderProjects.css';
// import { Link } from 'react-router-dom';
import { OlderProjectsData } from '../../OlderProjectsData';

const OlderProjects = () => {

    return (
        <section id='a'>
            <h2>Mini Projects</h2>

            <div className="container olderProjects__container">
                {
                    OlderProjectsData.map(({ id, image, title, summary, role, tech }) => {
                        return (
                            <article key={id} className='olderProject__item'>
                                <div className="olderProject__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <div>
                                    <h3>{title}</h3>
                                    <p>{summary}</p>
                                    <p>Role - {role}</p>
                                    <p>Tech - {tech}</p>
                                </div>
                                {/* <div className="portfolio__item-cta">
                                    <a href={demo} target='blank' className='btn'>Game</a>
                                    <Link to={`/projects/${title}`} onClick={scrollToTop} className='btn btn-primary'>More....</Link>
                                </div> */}
                            </article>
                        )
                    })
                }

            </div>


        </section>
    )
}

export default OlderProjects