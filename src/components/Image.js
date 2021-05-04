import React from 'react'

function Image(props) {
  return (
      <img src={props.imgsrc} id={props.id} className="butterfly-img" onClick={props.handleGame}/> 
  )
}

export default Image


