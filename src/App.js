import heImage from './images/he-image.png';
import demo from './images/demo.jpg';
import './App.css';
import React from 'react';
import CreateAsset from './components/CreateAsset';
import GetAsset from './components/GetAsset';
import GetAllAssets from './components/GetAllAssets';
import UpdateAsset from './components/UpdateAsset';
import DeleteAsset from './components/DeleteAsset';
import CenterAndAlignComponent from "./components/CenterAndAlignComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={heImage} alt="heImage" />
          <img src={demo} alt="demo" />
      </header>

      <CenterAndAlignComponent />
    </div>
  );
}

export default App;
