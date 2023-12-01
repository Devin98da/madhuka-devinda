import React from 'react'
// import CV from '/cv.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href="/cv.pdf" className='btn' target='blank'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA