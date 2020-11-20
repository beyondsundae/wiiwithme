import React from 'react'

function Page1() {

    const Style = {
        TopBox:{
            height: "7vh",
            marginBottom: "1vh"
        },

        Content: {
            border: "5px solid blue",
            height: "91vh"
        },
    }

    return (
        <div className="page1">
            <div className="container-fluid" style={Style.TopBox}/>

            <div className="container-fluid" style={Style.Content}>
                <div className="row FarFromTopBox1" > 
                    <div className="col-7 col-md-7 col-lg-5 col-xl-7 border border-danger">
                       <div className="WiiTitle">
                            WiiBoi
                        </div> 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page1
