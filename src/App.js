import React from 'react';
import './App.css';

import VideoList from './components/VideoList';
import NewVideoForm from './components/NewVideoForm';
import VideoPlayer from './components/VideoPlayer';
import {VideoContext} from './data/video/VideoContext';

function App() {
  return (
    <div className="App">
      <VideoContext>
        <NewVideoForm />
        <VideoPlayer />
        <VideoList />
      </VideoContext>
    </div>
  );
}

export default App;
