import memesData from "../memesData.js";
import React from "react";


export default function Meme(){
  const [memeImage, setMemeImage]=React.useState('')
  function getUrl(){
    // let memeImage = ''
    const randomIndex = Math.floor(Math.random() * memesData.data.memes.length);
    const randomUrl = memesData.data.memes[randomIndex].url
    
    setMemeImage(randomUrl)

  }
  
  return(
    <main>
      <div className="form">
        <div className="form-group">
        <label htmlFor="top-text" >Top Text</label>
        <input 
          id="top-text" type="text" className="form-input" placeholder="Top text" />
          
        </div>
        <div className="form-group">
        <label htmlFor="bottom-text"  >Bottom Text</label>
        <input 
          id="bottom-text" type="text" className="form-input" placeholder="Bottom text" />
        
        </div>
        <button className="form-btn" onClick={getUrl}>Get a new meme image 🖼</button>
      </div>
      <img src={memeImage} className="meme-image"/>
    </main>
  )
}
