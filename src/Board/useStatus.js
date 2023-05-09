import { useGame } from "../Game";
import { currentSquares, xIsNext } from "../utils";
import { useCalculateWinner } from "./useCalculateWinner";

export const useStatus = () => {
  const {history, currentMove} = useGame();
  const squares = currentSquares(history, currentMove);
  const calculateWinner = useCalculateWinner();
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext(currentMove) ? 'X' : 'O');
  }
  return () => status;
}
