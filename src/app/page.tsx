import Image from 'next/image';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
        <div className={styles.intro}>
          <h1>Non-opinionated TypeScript starter for Next.js</h1>
          <p>Highly scalable foundation with the best DX. All the tools you need to build your Next project.</p>
        </div>
        <div className={styles.ctas}>
          <a className={styles.primary} href="https://joaopedro.dev" target="_blank" rel="noreferrer">
            Created by João Pedro
          </a>
        </div>
      </main>
    </div>
  );
}
