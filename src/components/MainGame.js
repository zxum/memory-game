import React, {useState, useEffect} from 'react'
import Tray from './Tray'
import Tab from './Tab'


function MainGame() {
  let [selections, setSelection] = useState([])
  let [currScore, setCurrScore] = useState(0)
  let [bestScore, setBestScore] = useState(0)

  function handleGame(event) {
    let {id} = event.target
  
    if (!selections.includes(id)) {
      handleSelection(id)
      handleCurrScore()
    } else {
      handleBestScore()
      reset()
    }
  }

  function handleSelection(id) {
    setSelection(prevArr => [...prevArr, id])
  }

  function handleBestScore() {
    if (currScore > bestScore) {
      setBestScore(currScore)
    }
  }

  function handleCurrScore() {
    setCurrScore(prevScore => prevScore + 1)
  }

  function reset() {
    setCurrScore(0)
    setSelection([])
  }
  

  return (
    <div className="main-body">
      <Tray handleGame={handleGame} currScore={currScore} bestScore={bestScore}/> 
      <Tab styleId="topPos" labelInfo="Current Score" score={currScore} /> 
      <Tab styleId="midPos" labelInfo="Best Score" score={bestScore}/> 
      <Tab styleId="botPos" labelInfo="Max Score" score="16"/> 
    </div>
  )
}

export default MainGame