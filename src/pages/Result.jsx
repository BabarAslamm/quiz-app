import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import { Link } from 'react-router-dom';

function Result() {
    
    const { state, dispatch }= useContext(QuizContext);
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
                <Link to="/" className="btn btn-warning">
                    Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Result
