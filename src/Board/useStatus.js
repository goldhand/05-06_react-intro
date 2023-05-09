import { useCalculateWinner } from "./useCalculateWinner";

export const useStatus = ({squares, xIsNext}) => {
  const calculateWinner = useCalculateWinner();
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  return () => status;
}
