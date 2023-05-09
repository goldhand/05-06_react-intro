import { Board } from '../Board/Board'
import { GameInfo } from './GameInfo'
import styles from './Game.module.css'
import { GameProvider } from './GameContext';

export const Game = () => {
  return (
    <GameProvider>
      <div className={styles.Game}>
        <Board />
        <GameInfo />
      </div>
    </GameProvider>
  );
}
