import { Square } from '../Square';
import { Status } from './Status'
import { useNext } from './useNext';
import { useGame } from '../Game';
import styles from './Board.module.css';
import { currentSquares, xIsNext } from '../utils';

// 0, 1, 2...
const SQUARES = Array.from(Array(9)).map((_, i) => i)

export const Board = () => {
  const { history, currentMove } = useGame();
  const squares = currentSquares(history, currentMove);
  const handleClick = useNext();

  return (
    <div>
      <Status xIsNext={xIsNext(currentMove)} squares={squares} />
      <div className={styles.Board}>
        {SQUARES.map((i) => (
          <Square key={i} value={squares[i]} onSquareClick={handleClick(i)} />
        ))}
      </div>
    </div>
  );
}
