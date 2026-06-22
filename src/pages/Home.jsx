import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function Home() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [btnText, setBtnText] = useState('Start Quiz')
  const [validationErrors, setValidationErrors] = useState({'name': ''});

  const handleStartQuiz = (e) => {
    setBtnText('Processing...');
    
    if(!name.trim()) {
      setValidationErrors({'name': 'Name is required'});
      setBtnText('Start Quiz');
      return;
    }

    setValidationErrors({'name': ''});
    navigate('/quiz');

    
  }
  
  return (
    <div className="container text-center mt-5">
        <h1 className="fw-bold mb-4">🚀 React Quiz Challenge</h1>
        <input 
          placeholder="Enter your name" 
          className="form-control w-50 mx-auto " 
          type="text" 
          autocomplete="off" 
          value={name}
          onChange={(e) => setName(e.target.value) }
          />
          <p className='text-danger'>{validationErrors.name}</p>
        <button onClick={handleStartQuiz} className="btn btn-primary btn-lg">{btnText}</button>
    </div>
  )
}

export default Home
