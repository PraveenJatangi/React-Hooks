import React from 'react'

function count({text,count}) {
    console.log('rendering ',text)
  return (
    <div>
      <h2> {text}-{count}</h2>
    </div>
  )
}

export default React.memo(count)
