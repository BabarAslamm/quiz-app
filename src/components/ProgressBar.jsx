import React from 'react'

function ProgressBar({index, total}) {
  const progress = ((index + 1) / total ) * 100;
  return (
    <div className="progress mb-3">
        <div className="progress-bar" style={{ width: '50%' }}>
         { Math.round(progress) }%
        </div>
    </div>
  )
}

export default ProgressBar
