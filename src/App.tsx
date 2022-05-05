import { Calculator } from './components/Calculator';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Calculator />
    </div>
  );
}
