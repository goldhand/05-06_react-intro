import styles from './Game.module.css'
import { useGame } from './useGame';

export const GameInfo = () => {
  const {history, setCurrentMove} = useGame();

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  }

  return (
    <div className={styles.GameInfo}>
      <ol>
      {
        history.map((squares, move) => {
          let description;
          if (move > 0) {
            description = 'Go to move #' + move;
          } else {
            description = 'Go to game start';
          }
          return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
          );
        })
      }
      </ol>
    </div>
  );
};
