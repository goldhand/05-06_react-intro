import { useCalculateWinner } from "./useCalculateWinner";

export const useNext = ({squares, xIsNext}) => {
  const calculateWinner = useCalculateWinner();

  const getNext = (i) => {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    return nextSquares;
  }

  const createHandleNext = (onPlay, i) => () => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = getNext(i)
    onPlay(nextSquares);
  }

  return createHandleNext
}
