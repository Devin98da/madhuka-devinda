import React from 'react'
// import CV from '/cv.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href="/madhuka-devinda.pdf" download='/madhuka-devinda.pdf' className='btn' target='blank' rel='noopener noreferrer'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA