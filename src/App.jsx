import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  
  const handleTextAreaChange = (event) => {
    const textLength = event.target.value.length;
    const newHeight = textLength > 95 ? '25vh' : 'auto';
    setTextAreaHeight(newHeight);
  };

  useEffect(() => {
    const textArea = document.getElementById('inputBox');
    textArea.addEventListener('input', handleTextAreaChange);

    return () => textArea.removeEventListener('input', handleTextAreaChange);
  }, []);

  return (
    <div id="chatInterface">
      <div className="leftPanel">
        <div className="leftPanel">
          <h1>Previous Searches</h1>
          <div className="searchChunks">
            <span id="searchDate">Today</span>

            {/* THESE WILL BE IN MAP */}
            <div id="SearchedTerm">
              <p>There wiil be some searched...</p>
            </div>
            <div id="SearchedTerm">
              <p>There wiil be some searched...</p>
            </div>
            <div id="SearchedTerm">
              <p>There wiil be some searched...</p>
            </div>
            <div id="SearchedTerm">
              <p>There wiil be some searched...</p>
            </div>
            <div id="SearchedTerm">
              <p>There wiil be some searched...</p>
            </div>
            <div id="SearchedTerm">
              <p>There wiil be some searched...</p>
            </div>
            <span id="searchDate">Yesterday</span>
            {/* THESE WILL BE IN MAP */}

            {/* THESE WILL BE IN MAP */}
            <div id="SearchedTerm">
              <p>There wiil be some searched...</p>
            </div>
            <div id="SearchedTerm">
              <p>There wiil be some searched...</p>
            </div>
            <div id="SearchedTerm">
              <p>There wiil be some searched...</p>
            </div>
            <div id="SearchedTerm">
              <p>There wiil be some searched...</p>
            </div>
            <div id="SearchedTerm">
              <p>There wiil be some searched...</p>
            </div>
            <div id="SearchedTerm">
              <p>There wiil be some searched...</p>
            </div>
            {/* THESE WILL BE IN MAP */}

          </div>
        </div>
      </div>
      <div className="rightPanel">
        <nav>
          <h1>
            <span>AI</span>
            <span>Mug</span>
          </h1>
        </nav>
        <div id="inputBox" style={{ height: textAreaHeight }}>
          <textarea
            placeholder="Search anything..."
            type="text"
            onChange={handleTextAreaChange}
          />
          <i className="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default App;
