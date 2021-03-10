import React from 'react'
import Tray from './Tray'
import Tab from './Tab'


function MainGame() {
  return (
    <div className="main-body">
      <Tray /> 
      <Tab /> 
      <Tab /> 
      <Tab /> 
    </div>
  )
}

export default MainGame