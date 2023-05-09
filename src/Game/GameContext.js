import React from 'react';

export const GameContext = React.createContext({
  history: [],
  setHistory: () => null,
  currentMove: 0,
  setCurrentMove: () => null,
})

export const GameProvider = ({children}) => {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = React.useState(0);


  return (
    <GameContext.Provider value={{
      history,
      setHistory,
      currentMove,
      setCurrentMove,
    }}>
      {children}
    </GameContext.Provider>
  )
}
