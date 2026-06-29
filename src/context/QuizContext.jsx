import {  createContext, useContext, useReducer } from "react";
import questions from '../data/questions.json';

const QuizContext = createContext(null);

const initialState = {
  username: "",
  index: 0,
  score: 0,
  completed: false,
  questions,
};


function quizReducer(state, action) {
  switch (action.type){

    case "SET_NAME":
      return {...state, username: action.payload };
     

    default:
      return state;

  }

}


export function QuizProvider({ children }) {
  
  const [state, dispatch] = useReducer(quizReducer, initialState)

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === null) {
    throw new Error('useQuiz must be used inside a <QuizProvider>');
  }
  return context;
}
