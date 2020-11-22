import React from 'react'

import { useInView } from "react-intersection-observer";
import styled from 'styled-components'

function Page4() {

    const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.7, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.7, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 0.7, triggerOnce: true });     
    const [ref5, inView5] = useInView({ threshold: 0.7, triggerOnce: true }); 

    const Style = {
        TopBox:{
            // border: "1px solid red",
            height: "10vh",
            marginTop: "10vh",
            marginBottom: "1vh",
        },

        Content: {
            // border: "5px solid blue",
            height: "auto"
        },
    }

    const ContentText = styled.div`
        font-size: 2rem;
        font-weight: bold;
        color: grey;
        `

    return (
        <div className = "page4">
            <div className="container-fluid HeadTitle" style={Style.TopBox}>
                HOW TO TRANSFER GAME TO USB
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5 " >
                       <ContentText>
                            STEP 1 : DOWNLOAD <a href="http://www.wiibackupmanager.co.uk/WiiBackupManager_Build78.html"> Wii Backup Manager </a> 
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref}>
                            <img className={inView ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99807809-9621dd80-2b72-11eb-975b-0b307edb405e.png" />
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5 " >
                       <ContentText>
                            STEP 2 : BROWSE USB FLASH DRIVE
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref2}>
                            <img className={inView2 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99808090-f284fd00-2b72-11eb-8161-f8bbea98689e.png" />
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5 " >
                       <ContentText>
                            STEP 3 : BROWSE GAME FOLDER
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref3}>
                            <img className={inView3 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99808100-f4e75700-2b72-11eb-9ddc-b7de245a80d2.png" />
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5 " >
                       <ContentText>
                            STEP 4 : SELECT GAME
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref4}>
                            <img className={inView4 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99808104-f57fed80-2b72-11eb-8e12-abe952b4c493.png" />
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5 " >
                       <ContentText>
                            STEP 5 : TRANSFER TO USB DRIVE, DONE !
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref5}>
                            <img className={inView5 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99808111-f6b11a80-2b72-11eb-945b-27c70a447eb8.png" />
                        </div> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Page4
