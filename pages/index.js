import Head from 'next/head'
import Image from 'next/image'
import Converter from "../components/Converter";
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Assignment</title>
        <meta name="description" content="Assignment for Neptune Mutual" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Assignment
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Converter &rarr;</h2>
            <Converter/>
          </div>

         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
