import React from "react"
import memesData from "../memesData"

export default function Form(){
    
    const [memeImage , setMemeImage] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:""
    })

    function handleChange(event){
        setMemeImage(prevMeme=>({
            ...prevMeme,
            [event.target.name] : event.target.value   
        }))
    
    }

    let url
    function getMemeImage() {
        
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        

        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage:memeArray[randomNumber].url
        }))
        //url = memeArray[randomNumber].url  
        //console.log(url)
    }
    return(
        <div className="form">
           <input 
                type="text"
                placeholder="Top Text"
                className="form--input"
                name="topText"
                value={memeImage.topText}
                onChange={handleChange}
                />
           <input 
                type="text"
                placeholder="Bottom Text"
                className="form--input"
                name="bottomText"
                value={memeImage.bottomText}
                onChange={handleChange}/>

           <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
           <div className="meme">
                <img src={memeImage.randomImage} className="form--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </div>
    )
}