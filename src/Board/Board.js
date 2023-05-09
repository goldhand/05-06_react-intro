import { Square } from '../Square';
import { Status } from './Status'
import { useNext } from './useNext';
import styles from './Board.module.css';

// 0, 1, 2...
const SQUARES = Array.from(Array(9)).map((_, i) => i)

export const Board = ({ xIsNext, squares, onPlay }) => {

  const handleClick = useNext({squares, xIsNext})

  return (
    <div>
      <Status xIsNext={xIsNext} squares={squares} />
      <div className={styles.Board}>
        {SQUARES.map((i) => (
          <Square key={i} value={squares[i]} onSquareClick={handleClick(onPlay, i)} />
        ))}
      </div>
    </div>
  );
}
