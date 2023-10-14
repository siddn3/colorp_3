import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import ColorPicker from './components/ColorPicker'

function App() {
  return (
    
    <div className="App container">
      <h2 align="center">Click to Pick a Colour </h2>
        <ColorPicker/>  
    </div>
  );
}
 
export default App;