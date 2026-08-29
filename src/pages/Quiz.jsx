import {useEffect, useContext} from 'react'
import Timer from '../components/Timer'
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import { QuizContext } from '../context/QuizContext'
import { useNavigate } from 'react-router-dom'
import  useTimer  from '../hook/useTimer'





function Quiz() {

  const { state, dispatch} = useContext(QuizContext);
  const { index, score, questions } = state;
  const navigate = useNavigate();
  const { time, reset } = useTimer(12);
   

  useEffect(() => {

    if(time === 0){
      dispatch({ type: "ANSWER", payload: false })
      reset()
    }

  }, [time])

  const  handleSelectOption = (option) => {
    const isCorrect = option === questions[index].answer;

    dispatch({type: "ANSWER", payload: isCorrect})
    reset();

  } 

  if(index >= questions.length){
    dispatch({ type: "FINISH" })
    navigate('/result')
    return null;
  }
   const current = questions[index];
  return (
    <div className="container mt-4">
        <Timer time={time} />
        <ProgressBar index={index} total={questions.length} />
        <QuestionCard 
          question = {current.question} 
          options  = {current.options}
          handleSelect = {handleSelectOption}  
        />
    </div>
  )
}

export default Quiz
