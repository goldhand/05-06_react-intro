import { useGame } from "../Game";
import { currentSquares, xIsNext } from "../utils";
import { useCalculateWinner } from "./useCalculateWinner";

export const useNext = () => {
  const { history, currentMove, setHistory, setCurrentMove } = useGame();
  const squares = currentSquares(history, currentMove);

  const calculateWinner = useCalculateWinner();

  const getNextHistory = (nextSquares) => [...history.slice(0, currentMove + 1), nextSquares];

  const getNext = (i) => {
    const nextSquares = squares.slice();
    if (xIsNext(currentMove)) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    return nextSquares;
  }

  const createHandleNext = (i) => () => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextHistory = getNextHistory(getNext(i));
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  return createHandleNext
}
