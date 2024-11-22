import React from 'react'

function title() {
    console.log('rendering title')
  return (
    <div>
      <h1>Call back Hook example</h1>
    </div>
  )
}

export default React.memo(title)
