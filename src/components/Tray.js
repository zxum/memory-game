import React, {useState, useEffect} from 'react'
import Image from './Image'

function Tray() {

  let [butterflies, setButterflies] = useState(createButterflyArr)
  let [selections, setSelection] = useState([])


  function createButterflyArr() {
    let butterflyArr = []
    for (let i = 1; i < 17; i++) {
      butterflyArr.push("/images/butterfly_" + i + ".png")
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

  let butterflyList = butterflies.map(butterfly => {
    return <Image imgsrc={butterfly} /> 
  })

  return (
    <div className="board">
      {butterflyList}
    </div>
  )
}

export default Tray
