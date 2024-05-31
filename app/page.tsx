import Image from 'next/image';
import styles from './page.module.css';
import { Counter } from './components/organisms/Counter/Counter';

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Counter />
      </section>
    </main>
  );
}
