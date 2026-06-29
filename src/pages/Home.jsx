import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';


function Home() {

  const navigate = useNavigate();

  const { state, dispatch } = useQuiz();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStartQuiz = (e) => {
    e.preventDefault();

    const trimmedName = state.username.trim();
    if (!trimmedName) {
      setError('Name is required');
      return;
    }

    setError('');
    setLoading(true);
    navigate('/quiz');
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold mb-4">🚀 React Quiz Challenge</h1>
      <form onSubmit={handleStartQuiz}>
        <input
          placeholder="Enter your name"
          className="form-control w-50 mx-auto"
          type="text"
          autoComplete="off"
          value={state.username}
          onChange={(e) => dispatch({type: "SET_NAME", payload: e.target.value})}
        />
        <p className="text-danger">{error}</p>
        <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
          {loading ? 'Processing...' : 'Start Quiz'}
        </button>
      </form>
    </div>
  )
}

export default Home