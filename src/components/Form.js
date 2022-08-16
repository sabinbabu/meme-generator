import React from "react"
import memesData from "../memesData"

export default function Form(){
    
    const [memeImage , setMemeImage] = React.useState("")

    let url
    function getMemeImage() {
        
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomNumber].url)
        //url = memeArray[randomNumber].url  
        //console.log(url)
    }
    return(
        <div className="form">
           <input 
                type="text"
                placeholder="Top Text"
                className="form--input"/>
           <input 
                type="text"
                placeholder="Bottom Text"
                className="form--input"/>

           <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
           <img className="form--image" src={memeImage}></img>
        </div>
    )
}