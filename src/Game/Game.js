import { Board } from '../Board/Board'
import { GameInfo } from './GameInfo'
import { usePlay } from "./usePlay";
import styles from './Game.module.css'

export const Game = () => {

  const {
    currentSquares,
    handlePlay,
    jumpTo,
    xIsNext,
    history,
  } = usePlay();

  return (
    <div className={styles.Game}>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <GameInfo jumpTo={jumpTo} history={history} />
    </div>
  );
}
