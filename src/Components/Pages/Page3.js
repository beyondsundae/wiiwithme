import React from 'react'

import { useInView } from "react-intersection-observer";
import styled from 'styled-components'


function Page3() {

    const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.7, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.7, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 0.7, triggerOnce: true });     
    const [ref5, inView5] = useInView({ threshold: 0.7, triggerOnce: true });   
    const [ref6, inView6] = useInView({ threshold: 0.7, triggerOnce: true });   
    const [ref7, inView7] = useInView({ threshold: 0.7, triggerOnce: true });   
    const [ref8, inView8] = useInView({ threshold: 0.7, triggerOnce: true });   
    const [ref9, inView9] = useInView({ threshold: 0.7, triggerOnce: true });   
    const [ref10, inView10] = useInView({ threshold: 0.7, triggerOnce: true });   
    const [ref11, inView11] = useInView({ threshold: 0.7, triggerOnce: true });   
    const [ref12, inView12] = useInView({ threshold: 0.7, triggerOnce: true });   
    const [ref13, inView13] = useInView({ threshold: 0.7, triggerOnce: true });   
    const [ref14, inView14] = useInView({ threshold: 0.7, triggerOnce: true });   

    const Style = {
        TopBox:{
            height: "10vh",
            marginBottom: "1vh",
        },

        Content: {
            height: "auto"
        },
    }

    const ContentText = styled.div`
        font-size: 2rem;
        font-weight: bold;
        color: grey;
        `

    return (
        <div className="page3">
            <div className="container-fluid HeadTitle" style={Style.TopBox}>
                INSTALL HOMEBREW CHANNEL
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5 ">
                       <ContentText>
                            STEP 1 : PREPARE YOUR SD CARD, USB FLASH DRIVE AND Wii REMOTE.
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref}>
                            <img className={inView ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99792723-1425ba80-2b5a-11eb-96e4-c76fda3101f4.png" />
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5  " >
                       <ContentText>
                            STEP 2 : FORMAT TO FAT32
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7  ">
                       <div ref={ref2}>
                            <img className={inView2 ? "picsEx1 animate__animated animate__fadeInLeft" : "d-none"}  src="https://user-images.githubusercontent.com/59742129/99805981-e0558f80-2b6f-11eb-9d37-74cc3e755cd7.png"/>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5  ">
                       <ContentText>
                            STEP 3 : GO TO SETTINGS, REMEMBER YOUR VERSION, REGION AND Wi-Fi MAC ADDRESS
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref3}>
                            <img className={inView3 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99792522-cc9f2e80-2b59-11eb-985a-f2fa35dbde27.gif" />
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5" >
                       <ContentText>
                            STEP 4 : GO TO <a href="https://please.hackmii.com/">LetterBomb</a> AND FILL WHAT YOU REMEMBER FROM PREV STEP THEN CUT RED WIRE (IF YOU ARE NOT IN 4.3, PLEASE UPDATE)
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref4}>
                            <img className={inView4 ? "picsEx2 animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99792425-a7122500-2b59-11eb-9878-ca96196f6728.png" />
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5" >
                       <ContentText>
                            STEP 4.1 : GO TO <a href="https://www.mediafire.com/file/4ly75zh2q20ou8b/Original_softmod.zip/file">SOFTMOD</a> AND DOWNLOAD.
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref5}>
                            <img className={inView5 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99806893-3c6ce380-2b71-11eb-9117-426707cc921a.png" style={{width: "70%"}}/>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5" >
                       <ContentText>
                            STEP 5 : COPY EVERYTHING IN LetterBomb AND  SoftMod FOLDER TO SD CARD
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref6}>
                            <img className={inView6 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99805939-cfa51980-2b6f-11eb-93d8-99bddbb87cd6.png" style={{width: "60%"}}/>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5" >
                       <ContentText>
                            STEP 6 : INSERT SD CARD TO Wii AND TURN ON
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref7}>
                            <img className={inView7 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99807419-18f66880-2b72-11eb-934e-6bfb33442172.png" style={{width: "60%"}}/>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5" >
                       <ContentText>
                            STEP 7 : GO TO CALENDAR AND GO PREV DAY YOU GONNA SEE LetterBomb THEN CLICK IT
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref8}>
                            <img className={inView8 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99793314-0cb2e100-2b5b-11eb-9f76-6c9b0f1acbb1.gif" />
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5" >
                       <ContentText>
                            STEP 8 : INSTALL HOMEBREW AND BootMii AND THEN EXIT
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref9}>
                            <img className={inView9 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99793820-c9a53d80-2b5b-11eb-891d-062bc09e970d.gif" />
                            <img className={inView9 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99793832-d164e200-2b5b-11eb-8f41-10860bda1f52.gif" />
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5" >
                       <ContentText>
                            STEP 9 : NOW HOMEBREW CHANNEL APPEAR THEN RUN IT
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref10}>
                            <img className={inView10 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99796577-5225dd00-2b60-11eb-805b-647f4d7c62a5.gif"/>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5" >
                       <ContentText>
                            STEP 10 : THEN LOAD MULTI-MOD MANAGER 
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref11}>
                            <img className={inView11 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99797069-2b1bdb00-2b61-11eb-9bd7-6f510664491e.gif"/>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5" >
                       <ContentText>
                            STEP 11 : PRESS D-DOWN, SELECT WAD MANAGER AND HOLD + BUTTON TO SELECT ALL THEN PRESS A TO INSTALL
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref12}>
                            <img className={inView12 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99797080-30792580-2b61-11eb-8d96-2dbed7a67eca.gif"/>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5" >
                       <ContentText>
                            STEP 12 : NOW USB GX LOADER ON YOUR HOME CHANNEL THEN RUN IT
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref13}>
                            <img className={inView13 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99800405-e2ffb700-2b66-11eb-9aaf-045a92e8526b.gif"/>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox3" > 
                    <div className="step col-12 col-md-12 col-lg-5 col-xl-5" >
                       <ContentText>
                            STEP 13 : LET'S FUN
                        </ContentText> 
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7 ">
                       <div ref={ref14}>
                            <img className={inView14 ? "pics animate__animated animate__fadeInLeft" : "d-none"} src="https://user-images.githubusercontent.com/59742129/99800756-720ccf00-2b67-11eb-80e5-d63e3ba2fa1b.gif"/>
                        </div> 
                    </div>
                </div>
            </div>

            


        </div>
    )
}

export default Page3

//Maybe I want to map those
