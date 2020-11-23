import React, {useState, useEffect} from 'react'

import Scrollbar from 'smooth-scrollbar-react';

import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
import Page4 from "./Page4"
import Page5 from "./Page5"
function Home() {
    const {width} = useWidth()
    const breakPoint = 800
  
    return (
      <div className="App">
        {width < breakPoint?
              (
                  <div style={{height: "100vh"}}>
                      <Page1/>
                      <Page2/>
                      <Page3/>
                      <Page4/>
                      <Page5/>
                  </div>
              )
              :(
                  <Scrollbar damping={0.3}>
                      <div style={{height: "100vh"}}>
                        <Page1/>
                        <Page2/>
                        <Page3/>
                        <Page4/>
                        <Page5/>
                      </div>
                  </Scrollbar>
              )}
      </div>
    );
}

export default Home

const useWidth = () => {
    const [ width, setWidth ] = useState(window.innerWidth)
  
    const widthHandler =()=>{
        setWidth(window.innerWidth)
    }
  
    useEffect(()=>{
        window.addEventListener("resize", widthHandler)
  
        return()=>{
            window.removeEventListener("resize", widthHandler)
        }
    }, [])
  
    return { width };
  }