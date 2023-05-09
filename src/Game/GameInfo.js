import styles from './Game.module.css'

export const GameInfo = ({history, jumpTo}) => (
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
