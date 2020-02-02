import React from "react"
import { sveJuhe } from "../sveJuhe"
import { sveTjestenine } from "../sveTjestenine"
import { Jela } from "../dumbComponents/Jela"
import { svaHladna } from "../svaHladna"
import { svaRizota } from "../svaRizota"
import { svaGlavna } from "../svaGlavna"
import { svaFocaccie } from "../svaFocaccie"
import { svePizze } from "../svePizze"
import { sveBijele } from "../sveBijele"
import { sviDeserti } from "../sviDeserti"

export class MenuSmart extends React.Component{
    state = {
        jelovnik:"Hladna",
        soups: sveJuhe,
        pasta: sveTjestenine,
        cold: svaHladna,
        rizoto: svaRizota,
        main: svaGlavna,
        focaccie: svaFocaccie,
        pizza: svePizze,
        white: sveBijele,
        dessert: sviDeserti
    }

    handleHladna = () => {
        this.setState({ jelovnik: "Hladna"})
    }
    handleJuhe = () => {
        this.setState({ jelovnik: "Juhe"})
    }
    handleTjestenine = () => {
        this.setState({ jelovnik: "Tjestenine"})
    }
    handleRizota = () => {
        this.setState({ jelovnik: "Rizota"})
    }
    handleGlavna = () => {
        this.setState({ jelovnik: "Glavna"})
    }
    handleFocaccie = () => {
        this.setState({ jelovnik: "Focaccie"})
    }
    handlePizze = () => {
        this.setState({ jelovnik: "Pizze"})
    }
    handleBijele = () => {
        this.setState({ jelovnik: "Bijele"})
    }
    handleDeserti = () => {
        this.setState({ jelovnik: "Deserti"})
    }


    rendering = () => {
        if(this.state.jelovnik === "Hladna"){
            return(this.state.cold.map(function(jelo, i){
                return(<Jela jelo={jelo} key={i} />)
            }))
        }
        else if(this.state.jelovnik === "Juhe"){
            return(this.state.soups.map(function(jelo, i){
                return <Jela jelo={jelo} key={i} />
                }))
        }else if(this.state.jelovnik === "Tjestenine"){
            return(
                this.state.pasta.map(function(jelo, i){
                    return <Jela jelo={jelo} key={i} />
                }))
        }else if(this.state.jelovnik === "Rizota"){
            return(this.state.rizoto.map(function(jelo, i){
                return <Jela jelo={jelo} key={i} />
            }))
        }else if(this.state.jelovnik === "Glavna"){
            return(this.state.main.map(function(jelo, i){
                return <Jela jelo={jelo} key={i} />
            }))
        }else if(this.state.jelovnik === "Focaccie"){
            return(this.state.focaccie.map(function(jelo, i){
                return <Jela jelo={jelo} key={i} />
            }))
        }else if(this.state.jelovnik === "Pizze"){
            return(this.state.pizza.map(function(jelo, i){
                return <Jela jelo={jelo} key={i} />
            }))
        }else if(this.state.jelovnik === "Bijele"){
            return(this.state.white.map(function(jelo, i){
                return <Jela jelo={jelo} key={i} />
            }))
        }else if(this.state.jelovnik === "Deserti"){
            return(this.state.dessert.map(function(jelo, i){
                return <Jela jelo={jelo} key={i} />
            }))
        }
    }

    render(){
        return(
            <div id="menu">
                <div id="margine">
                    <p id="jelovnik">JELOVNIK</p> 
                    <ul id="navbarUl">
                        <li onClick={this.handleHladna} style={this.state.jelovnik === "Hladna" ? {backgroundColor:"#e4c49c", color:"white", border:"0px"} : {backgroundColor:"white", color:"black"}} className="menuNavbar">Hladna predjela</li>
                        <li onClick={this.handleJuhe} style={this.state.jelovnik === "Juhe" ? {backgroundColor:"#e4c49c", color:"white", border:"0px"} : {backgroundColor:"white", color:"black"}} className="menuNavbar">Juhe</li>
                        <li onClick={this.handleTjestenine} style={this.state.jelovnik === "Tjestenine" ? {backgroundColor:"#e4c49c", color:"white", border:"0px"} : {backgroundColor:"white", color:"black"}} className="menuNavbar">Tjestenine</li>
                        <li onClick={this.handleRizota} style={this.state.jelovnik === "Rizota" ? {backgroundColor:"#e4c49c", color:"white", border:"0px"} : {backgroundColor:"white", color:"black"}} className="menuNavbar">Rižota</li>
                        <li onClick={this.handleGlavna} style={this.state.jelovnik === "Glavna" ? {backgroundColor:"#e4c49c", color:"white", border:"0px"} : {backgroundColor:"white", color:"black"}} className="menuNavbar">Glavna jela</li>
                        <li onClick={this.handleFocaccie} style={this.state.jelovnik === "Focaccie" ? {backgroundColor:"#e4c49c", color:"white", border:"0px"} : {backgroundColor:"white", color:"black"}} className="menuNavbar">Focaccie</li>
                        <li onClick={this.handlePizze} style={this.state.jelovnik === "Pizze" ? {backgroundColor:"#e4c49c", color:"white", border:"0px"} : {backgroundColor:"white", color:"black"}} className="menuNavbar">Pizze</li>
                        <li onClick={this.handleBijele} style={this.state.jelovnik === "Bijele" ? {backgroundColor:"#e4c49c", color:"white", border:"0px"} : {backgroundColor:"white", color:"black"}} className="menuNavbar">Bijele pizze</li>
                        <li onClick={this.handleDeserti} style={this.state.jelovnik === "Deserti" ? {backgroundColor:"#e4c49c", color:"white", border:"0px"} : {backgroundColor:"white", color:"black"}} className="menuNavbar">Deserti</li>
                    </ul>
                </div>
                {this.rendering()}
            </div>
        )
    }
}