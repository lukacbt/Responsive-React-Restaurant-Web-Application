import React from "react"

export function Pictures(props) {
    return(
        <div id="pictures">
            <img src={props.pics.src} />
        </div>
    )
}