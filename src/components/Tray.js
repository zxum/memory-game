import React, {useState, useEffect} from 'react'
import Image from './Image'

function Tray(props) {
  let {currScore, bestScore} = props
  let [butterflies, setButterflies] = useState(createButterflyArr)


  function createButterflyArr() {
    let butterflyArr = []
    for (let i = 1; i < 17; i++) {
      butterflyArr.push({
        id: i,
        imgsrc: "./images/butterfly_" + i + ".png"
      })
    }
    return butterflyArr
  }
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  useEffect(()=>{
    let newArr = [...butterflies]
    shuffleArray(newArr)
    setButterflies(newArr)
  },[currScore,bestScore])

  let butterflyList = butterflies.map(butterfly => {
    return <Image key={butterfly.id} 
                  imgsrc={butterfly.imgsrc} 
                  id={butterfly.id} 
                  handleGame={props.handleGame} /> 
  })

  return (
    <div className="board">
      {butterflyList}
    </div>
  )
}

export default Tray
