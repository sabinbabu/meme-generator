import React from "react"
//import memesData from "../memesData"

export default function Form(){
    
    const [memeImage , setMemeImage] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const[allMeme , setAllMeme] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
    },[])

    function handleChange(event){
        setMemeImage(prevMeme=>({
            ...prevMeme,
            [event.target.name] : event.target.value   
        }))
    }

   
    function getMemeImage() {     
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage:allMeme[randomNumber].url
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