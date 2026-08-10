import React from 'react'

function QuestionCard({question, options, handleSelect}) {

  console.log('question', question)
  return (
    <div className="card shadow p-4">
        <h4 className="fw-semibold">{question}</h4>
        <div className="mt-3">
          {options.map((option,i)=> (
            <button 
              key={i} 
              onClick ={() => handleSelect(option)}
              className="btn btn-outline-primary w-100 mt-2">
                {option}
            </button>
          ))}
            
        </div>
    </div>
  )
}

export default QuestionCard
