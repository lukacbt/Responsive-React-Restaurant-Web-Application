import React from "react"

export function Header(){
    return(
        <div id="head">
            <div>
            <a className="leftHeader" href="#carousel">NOŠTROMO</a>
            </div>
            <div className="rightHeader">
                <ul className="navbar">
                    <li><a className="link" href="#aboutUs">O NAMA</a></li>
                    <li><a className="link" href="#menu">JELOVNIK</a></li>
                    <li><a className="link" href="#pictures">GALERIJA</a></li>
                    <li><a className="link" href="#contact">KONTAKT</a></li>
                </ul>
            </div>
        </div>
    )
}