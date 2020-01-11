import React, { useState }  from 'react'
import LeftMenu from "./LeftMenu"
import BodyMain from "./BodyMain"


export default function Main() {

    return (
        <div className="row mx-0">
            <div className="col-md-2 pr-0">
                <LeftMenu/>
            </div>
            <div className="col-md-10 px-0">
                <BodyMain/>
            </div>

        </div>
    )
}
