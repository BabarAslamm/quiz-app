import React from 'react'
import { useContext, useEffect } from 'react'
import { QuizContext } from '../context/QuizContext'
import { Link } from 'react-router-dom';

function Result() {
    
    const { state, dispatch }= useContext(QuizContext);

    const percentage = Math.round((state.score / state.questions.length) * 100);

    

    useEffect(() => {
      const entry = {
        username: state.username,
        index: state.index,
        score: state.score,
        percentage,
        date: new Date().toLocaleString()
      }

    const storedEntries = JSON.parse(localStorage.getItem('leaderboard'));
    const storedEnteriesUpdated = [...storedEntries, entry];
    
    storedEnteriesUpdated.sort((a, b) => b.score - a.score)
    
    localStorage.setItem('leaderboard', JSON.stringify(storedEnteriesUpdated))


    },[])

  return (
    <div className="container text-center mt-5">
        <div className="card shadow p-5">
            <h2 className="fw-bold mb-3">🎉 Quiz Completed!</h2>
            <h4> {state.username}, your score is:</h4>
            <h1 className="text-success"> {state.score} </h1>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to="/leaderboard" className="btn btn-primary">
                   View Leaderboard
                </Link>
                <Link 
                    to="/" 
                    className="btn btn-warning"
                    onClick={() => dispatch({ type: "RESET"  })}
                >
                    Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Result
