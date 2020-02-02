import React from "react"
import { Slike } from "../Slike"
import { Pictures } from "../dumbComponents/Pictures"

export class PicturesSmart extends React.Component {
    state = {
        pictures: Slike
    } 


    render(){
        return(
            <div>
                {this.state.pictures.map(
                    function(pics, i){
                        return(
                            <Pictures pics={pics} key={i} />
                        )
                    }
                )}
            </div>
        )
    }
}