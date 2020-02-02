import React from "react"

export function Jela(props) {
    return(

        <div className="jela">
                <p className="naziv">{props.jelo.ime}</p>
                <p className="osoba">{props.jelo.osoba}</p>
                <p className="opis">{props.jelo.opis}</p>
                <p className="cijena">{props.jelo.cijena}</p>
                <div className="line"></div>
        </div>
    )
}