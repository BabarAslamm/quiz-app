import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Home from './pages/Home.jsx';
import LeaderBoard from './pages/LeaderBoard.jsx';
import Quiz from './pages/Quiz.jsx';
const Result = lazy(() => import('./pages/Result.jsx'));

import  QuizProvider  from './context/QuizContext'


function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;