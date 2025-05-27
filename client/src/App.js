import React from 'react'
import Routs from './Utils/Routs/routs'
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './Context/themeContext';
import MobileNav from './components/mobileNav/mobileNav';

const App = () => {
  const[theme] = useTheme()
  return (
    <>
      <div id={theme} >
        <MobileNav />
      <Routs />
      </div>
      <ScrollToTop smooth style={{backgroundColor : " rgb(5, 161, 135)", borderRadius : "2rem"}} />
    </>
  )
}

export default App
