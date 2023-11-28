import React from 'react'
import Header from './Components/Header/header';
import Nav from './Components/Nav/nav';
import About from './Components/About/about';
import Experiance from './Components/Experience/experiance';
import Services from './Components/Services/services';
import Portfolio from './Components/Portfolio/portfolio';
import Testermonial from './Components/Testemonial/testemonial';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import { Route, Routes } from 'react-router-dom';
import PersonalProject from './Components/Portfolio/Porject/PersonalProject';
import Home from './Components/Home/Home';
import About_Resume from './Components/About_Resume/About_Resume';

const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Nav /> */}
      {/* <About />  */}
      {/* <Experiance /> */}
      {/* /* <Services /> */}
      {/* <Routes>
        <Route path='/' element={<About/>}></Route>
        <Route path='/' element={<Portfolio />}></Route>
        <Route path='/projects/:projectId' element={<PersonalProject />}></Route>
        <Route path='/' element={<Contact/>}></Route>
      </Routes> */}
      {/* <Portfolio/> */}
      {/* <Testermonial /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      <Nav />

      <Routes>
        <Route path='/madhuka-devinda' element={<Home />}></Route>
        <Route path='/madhuka-devinda/projects/:projectId' element={<PersonalProject />}></Route>
        <Route path='/madhuka-devinda/about-resume' element={<About_Resume/>}></Route>

      </Routes>
    </>
  )
}

export default App