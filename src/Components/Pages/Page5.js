import React from 'react'

import styled from 'styled-components'

function Page5() {

    const FooterText = styled.div`
        font-size: 1rem;
        font-weight: bold;
        color: grey;
        `

    return (
        <div className="page5" >
            <div className="text-right mt-5 mb-5 mr-1">
                <FooterText>
                    By beyondsundae 
                    <a target="_blank" href="https://github.com/beyondsundae" >
                    <img 
                        src="https://avatars2.githubusercontent.com/u/59742129?s=60&v=4" 
                        className="ml-2 pr-3"
                        alt="Beyondsundae"
                        style={{ border: "0", height: "30px" }}/>
                </a>
                </FooterText>
            </div>
            
        </div>
    )
}

export default Page5
