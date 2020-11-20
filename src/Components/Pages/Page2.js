import React from 'react'

import styled from 'styled-components'
import lorem from '../Pics/lorem.png'

function Page2() {

    const Style = {
        TopBox:{
            height: "3vh",
            marginBottom: "1vh"
        },

        Content: {
            border: "5px solid blue",
            height: "95vh"
        },
    }

    const ContentText = styled.div`
        font-size: 2rem;
        font-weight: bold;
        color: grey;
        `

    return (
        <div className="page2">
            <div className="container-fluid" style={Style.TopBox}/>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox2" > 
                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 border border-danger">
                       <div >
                            <img src="https://user-images.githubusercontent.com/59742129/99769224-90a7a180-2b38-11eb-9bf5-c20a328824d1.gif" style={{width: "90%"}}/>
                        </div> 
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 col-xl-5 border border-danger" style={{paddingTop: "20vh"}}>
                       <ContentText>
                            THIS PAGE CREATED FOR TEACHING HOW TO INSTALL Wii HOMEBREW TO PLAY GAMES FROM USB STEP BY STEP 
                        </ContentText> 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page2
