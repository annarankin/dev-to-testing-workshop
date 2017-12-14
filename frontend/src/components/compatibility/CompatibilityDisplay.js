import React from 'react';
import Gauge from './Gauge'
import Panel from './Panel'
import './CompatibilityDisplay.css'

const CompatibilityDisplay = ({ dogeA, dogeB }) => {
  if (!dogeA || !dogeB) { return <div>Loading!</div> }

  return (
    <div className="CompatibilityDisplay">
      <Panel {...dogeA} />
      <Gauge
        listA={dogeA.likes}
        listB={dogeB.likes}
      />
      <Panel {...dogeB} />
    </div>
  )
}

export default CompatibilityDisplay
