import {useState} from 'react'

export const useHistory = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);

  return [
    history,
    setHistory,
  ]
}

export const useMove = () => {
  const [currentMove, setCurrentMove] = useState(0);

  return [
    currentMove,
    setCurrentMove,
  ]
}

export const usePlay = () => {
  const [history, setHistory] = useHistory();
  const [currentMove, setCurrentMove] = useMove();

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const getNextHistory = (nextSquares) => [...history.slice(0, currentMove + 1), nextSquares];

  function handlePlay(nextSquares) {
    const nextHistory = getNextHistory(nextSquares);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return {
    currentSquares,
    handlePlay,
    jumpTo,
    xIsNext,
    history,
  }
}
