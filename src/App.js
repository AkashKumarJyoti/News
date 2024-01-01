import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {
  pageSize = 5;
  apikey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress});
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="general" category="general" country="in" pageSize={this.pageSize}/>}></Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apikey} keybusiness category="business" country="in" pageSize={this.pageSize}/>}></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="entertainment" category="entertainment" country="in" pageSize={this.pageSize}/>}></Route>
            <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="general" category="general" country="in" pageSize={this.pageSize}/>}></Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="health" category="health" country="in" pageSize={this.pageSize}/>}></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="science" category="science" country="in" pageSize={this.pageSize}/>}></Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="sports" category="sports" country="in" pageSize={this.pageSize}/>}></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="technology" category="technology" country="in" pageSize={this.pageSize}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App