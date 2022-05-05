import styles from './Display.module.scss'

export const Display = ({ exp }: { exp: string }) => {
  return (
    <div className={styles.display}>{exp}</div>
  );
}