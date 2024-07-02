// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const [progress, setProgress] = useState(0);

  // apiKey = process.env.REACT_APP_NEWS_API;
  let apiKey = "3f9fe9422aa641a7bc8edc5dc38bf250";


  const setProgress2 = (progress)=>{
    setProgress(progress);
  }

 
    return (
      <div>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={2}
      />
        <Navbar/>
        <News apiKey={apiKey} setProgress={setProgress2} pageSize={5} category='science'/>
      </div>
    )
  }
  
export default App;


