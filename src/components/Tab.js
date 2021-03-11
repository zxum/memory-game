import React from 'react'

function Tab(props) {



  return (
    <div className="tab-position" id={props.styleId}>
      <div className="tab-container">
        <p className="label-info">{props.labelInfo}</p>
        <p className="score">{props.score}</p>
      </div>
    </div>
  )
}

export default Tab
