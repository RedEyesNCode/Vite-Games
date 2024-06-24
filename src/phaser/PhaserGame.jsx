import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

function PhaserGame() {
  const gameRef = useRef(null);

  useEffect(() => {
    const estimatedMobileWidth = 375; // Adjust as needed
    const estimatedMobileHeight = window.innerHeight; // Get window height

    const config = {
      type: Phaser.AUTO,
      width: estimatedMobileWidth,
      height: estimatedMobileHeight,
      parent: gameRef.current,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        orientation: Phaser.Scale.LANDSCAPE // Set landscape orientation
      },  
      scene: {
        
      }
    };

    const game = new Phaser.Game(config);

    // Resize the game when the window resizes
    const resize = () => {
      game.scale.resize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', resize);

    // Cleanup 
    return () => {
      window.removeEventListener('resize', resize);
      game.destroy(true);
    };
  }, []); 

  return <div ref={gameRef} />;
}

export default PhaserGame;
