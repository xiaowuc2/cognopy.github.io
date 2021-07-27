import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>cognoPy</title>
        <link rel="icon" href="/red.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/xiaowuc2/cognopy">cognoPy!</a>
        </h1>

        <p className={styles.description}>
          {' '}
          <code className={styles.code}>AI powered Python app. Detects your smile and what made you smile.</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>In-depth information about cognoPy and Quick Start Guide</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Install &rarr;</h3>
            <p>Installation guideline on pypi.org : pip install congoPy</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>A day with cognoPy : Mood Refresher & Usage Statistics</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Live Demo &rarr;</h3>
            <p>
              Instantly deploy cognoPy in Google Colab - Give a smile! 
            </p>
          </a>
        </div>
         <p className={styles.description}>
           {' '}
           <code className={styles.code}>AI powered Python app. Detects your smile and what made you smile.</code>
           <ul>
             <li>First point here... * Second point here... * Third point here...</li>
           </ul>
         </p>

         <ul>
           <li>Coffee</li>
           <li>Tea</li>
           <li>Milk</li>
         </ul>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/xiaowuc2/cognoPy"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <code className={styles.code}>⭐ GitHub/cognoPy</code>
        </a>
      </footer>
    </div>
  )
}
