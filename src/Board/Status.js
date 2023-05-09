import styles from './Board.module.css'
import { useStatus } from './useStatus'

export const Status = () => {
  const getStatus = useStatus();
  return (
    <div className={styles.Status}>
      {getStatus()}
    </div>
  );
}
