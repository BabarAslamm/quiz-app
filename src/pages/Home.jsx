import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStartQuiz = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Name is required');
      return;
    }

    setError('');
    setLoading(true);
    navigate('/quiz', { state: { name: trimmedName } });
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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