import React from 'react'

import scroll from '../Pics/scroll.gif'
import wiiLogo from '../Pics/Wii_logo.png'

function Page1() {

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
                            WiiwithMe
                        </div> 
                    </div>

                    <div className="ScrollBox col-12 col-md-12 col-lg-12 col-xl-12 " >
                        <img src={scroll} className="ScrollSize" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page1
