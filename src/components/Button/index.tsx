import styles from './Button.module.scss';

export const Button = ({
  label,
  onClick
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={styles.btn}
      id={styles[label]}
      onClick={onClick}
    >
      {label}
    </button>
  )
}