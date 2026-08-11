import React from 'react'

function Timer({ time }) {
  console.log('time', time)
  return (
    <div className="alert alert-info text-center fw-bold">⏳ Time Left: {time}s</div>
  )
}

export default Timer
