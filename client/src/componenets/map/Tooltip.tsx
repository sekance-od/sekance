import React from 'react'

const Tooltip: React.FC<any> = ({ feature }) => {
  const { id } = feature.properties

  return (
    <div id={`tooltip-${id}`}>
      <strong>Source Layer:</strong> {feature.layer['source-layer']}
      <br />
      <strong>Layer ID:</strong> {feature.layer.id}
    </div>
  )
}

export default Tooltip
