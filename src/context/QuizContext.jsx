import {  createContext, useContext, useState } from "react";

const QuizContext = createContext(null);


export function QuizProvider({ children }) {
  const [name, setName] = useState('');

  return (
    <QuizContext.Provider value={{ name, setName }}>
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
