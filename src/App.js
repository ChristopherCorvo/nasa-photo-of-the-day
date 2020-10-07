import React, {useState, useEffect} from "react";
import "./App.css";

import axios from 'axios' // importing the axios tools

// Importing components --- long way

import NasaImage from './Components/NasaImage';
import ImageExplanation from './Components/ImageExplanation';
import ImageTitle from './Components/ImageTitle';


function App() {
  const [imageTitle, setImageTitle] = useState('')
  const [imageURL, setImageURL] = useState('') 
  const [imageExplanation, setImageExplanation] = useState('')
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date`)
      .then(res =>{
        
        // add data to state
        setImageTitle(res.data.title)
        setImageURL(res.data.url)
        setImageExplanation(res.data.explanation)


      })
      .catch(err =>{
        console.log("You recieved an error")
        })
  },[])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

      <ImageTitle imageTitle = {imageTitle}/>
      <NasaImage nasaImage = {imageURL}/>
      <ImageExplanation imageExplanation = {imageExplanation}/>

    </div>
  );
}

export default App;
