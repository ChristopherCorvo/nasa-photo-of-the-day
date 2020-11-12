import React, {useState, useEffect} from "react";
import "./App.css";

import axios from 'axios' // importing the axios tools

// Importing components --- long way
import NasaImage from './Components/NasaImage';
import ImageExplanation from './Components/ImageExplanation';
import ImageTitle from './Components/ImageTitle';
import PageHeader from './Components/PageHeader';
import DateInputForm from './Components/DateInputForm';


function App() {
  const [imageTitle, setImageTitle] = useState('')
  const [imageURL, setImageURL] = useState('') 
  const [imageExplanation, setImageExplanation] = useState('')

  const [date, setDate ] = useState('') // =2020-10-08
  console.log(date)
  console.log(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`) 
      .then(res =>{
        
        // add data to state
        setImageTitle(res.data.title)
        setImageURL(res.data.url)
        setImageExplanation(res.data.explanation)


      })
      .catch(err =>{
        console.log("You recieved an error")
        })
  },[date])

  console.log(imageTitle)
  console.log(imageTitle)

  return (
    <div className="App">
      
      <PageHeader/>
      <ImageTitle imageTitle = {imageTitle}/>
      <DateInputForm setImageDate={setDate}/>
      <NasaImage nasaImage = {imageURL}/>
      <ImageExplanation imageExplanation = {imageExplanation}/>

    </div>
  );
}

export default App;
