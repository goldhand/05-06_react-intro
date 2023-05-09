import styles from './Board.module.css'
import { useStatus } from './useStatus'

export const Status = ({squares, xIsNext}) => {
  const getStatus = useStatus({squares, xIsNext});
  return (
    <div className={styles.Status}>
      {getStatus()}
    </div>
  );
}
