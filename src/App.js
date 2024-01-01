import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apikey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);

    return (
      <div>
        <BrowserRouter>
          <NavBar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} apiKey={apikey} key="general" category="general" country="in" pageSize={pageSize}/>}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apikey} keybusiness category="business" country="in" pageSize={pageSize}/>}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apikey} key="entertainment" category="entertainment" country="in" pageSize={pageSize}/>}></Route>
            <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apikey} key="general" category="general" country="in" pageSize={pageSize}/>}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apikey} key="health" category="health" country="in" pageSize={pageSize}/>}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apikey} key="science" category="science" country="in" pageSize={pageSize}/>}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apikey} key="sports" category="sports" country="in" pageSize={pageSize}/>}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apikey} key="technology" category="technology" country="in" pageSize={pageSize}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  
}

export default App