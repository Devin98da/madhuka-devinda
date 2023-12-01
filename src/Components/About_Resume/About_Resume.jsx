import React from 'react'
import About from '../About/about';
import Page1 from '../../Assets/page1.jpg';
import Page2 from '../../Assets/page2.jpg';
import classes from './About_Resume.module.css';
import Footer from '../Footer/footer';

const About_Resume = () => {
    return (
        <section> 
            <About />
            <div className={`container ${classes.about_resume_container}`}>
                {/* <div>
                    <h2 className={classes.title}>About Me</h2>
                </div> */}
               
                <div className={classes.resume_content}>
                    <hr></hr>

                    <h2 className={classes.title}>Resume Preview</h2>
                    <div className={classes.images}>
                        <img src={Page1} />
                        <img src={Page2} />
                    </div>
                </div>
            </div >
            <Footer />
        </section>
    )
}

export default About_Resume