// src/VideoCallPopup.js
import React, { useState, useEffect } from "react";
import "./popup.css";
import Popup from 'reactjs-popup';

const VideoCallPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Adjust the delay time (in milliseconds) as needed
    return () => clearTimeout(timeoutId);
  }, []);

  const handleContinue = () => {
    alert("Video call resumed!");
    setIsOpen(false);
  };

  const handleEnd = () => {
    alert("Video call ended!");
    setIsOpen(false);
  };

  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={() => setIsOpen(false)} position="right center">
        <div className="popup">
          <h2>Continue Video Call?</h2>
          <p>Would you like to continue the video call or end it?</p>
          <div className="button-group">
            <button className="btn primary" onClick={handleContinue}>
              Continue
            </button>
            <button className="btn danger" onClick={handleEnd}>
              End
            </button>
          </div>
        </div>
      </Popup>
  );
};

export default VideoCallPopup;
