import React from "react"
import { Header } from "./dumbComponents/Header"
import { Carousel } from "./dumbComponents/Carousel"
import { About } from "./dumbComponents/About"
import { MenuSmart } from "./smartComponents/MenuSmart"
import { Carousel2 } from "./dumbComponents/Carousel2"
import { PicturesSmart } from "./smartComponents/PicturesSmart"
import { GoogleMap } from "./dumbComponents/GoogleMap"
import { Contact } from "./dumbComponents/Contact"
 
export function App(){
  return(
    <div>
      <Header/>
      <Carousel/>
      <About/>
      <MenuSmart/>
      <Carousel2/>
      <PicturesSmart/>
      <GoogleMap/>
      <Contact/>
    </div>
  )
}