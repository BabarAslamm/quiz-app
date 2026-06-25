import {  createContext, useState } from "react";

const QuizContext = createContext(null);


export function QuizProvider({ children }) {
  const [name, setName] = useState('');

  return (
    <QuizContext.Provider value={{ name, setName }}>
      {children}
    </QuizContext.Provider>
  );
}
