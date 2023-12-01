import React from 'react'
// import CV from '/cv.pdf';

const CTA = () => {

    const handleDownload = () => {
      const pdfUrl = "https://devin98da.github.io" + '/madhuka-devinda.pdf';
      window.open(pdfUrl, '_blank');
    };

  return (
    <div className='cta'>
      <button onClick={handleDownload}>CLikc</button>
        {/* <a href="/madhuka-devinda.pdf" download='/madhuka-devinda.pdf' className='btn' target='blank' rel='noopener noreferrer'>Download CV</a> */}
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA