import React from 'react'
import Tray from './Tray'
import Tab from './Tab'


function MainGame() {
  return (
    <div className="main-body">
      <Tray /> 
      <Tab styleId="topPos" labelInfo="Current Score" score="10"/> 
      <Tab styleId="midPos" labelInfo="Best Score" score="9"/> 
      <Tab styleId="botPos" labelInfo="Max Score" score="16"/> 
    </div>
  )
}

export default MainGame