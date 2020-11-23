import React, {useState, useEffect} from 'react'

import { Link, animateScroll as scroll } from "react-scroll";

import Scrollwheel from '../Pics/scroll.gif'
import wiiLogo from '../Pics/Wii_logo.png'

function Page1() {

    const {width} = useWidth()
    const breakPoint = 800

    const Style = {
        TopBox:{
            height: "7vh",
            marginBottom: "1vh"
        },

        Content: {
            // border: "5px solid blue",
            height: "91vh"
        }
    }

    return (
        <div className="page1">
            <div className="container-fluid text-left" style={Style.TopBox}>
                <img src={wiiLogo} style={{width: "10%"}}/>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox1" > 
                    <div className="col-7 col-md-7 col-lg-5 col-xl-7">
                       <div className="WiiTitle animate__animated animate__bounce animate__repeat-3">
                            WiiwithMe <br/>
                        </div> 
                        {width < breakPoint?
                        (<div className="textNav">
                            <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            isDynamic={true}
                            >▶ INSTALL HOMEBREW</Link>
                            <br/><br/>

                            <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            >▶ TRANSFER GAME TO USB</Link>
                        </div>)
                        :"" 
                        }
                    </div>

                    <div className="ScrollBox col-12 col-md-12 col-lg-12 col-xl-12 " >
                        <img src={Scrollwheel} className="ScrollSize" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page1

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