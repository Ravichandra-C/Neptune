import Head from 'next/head'
import Image from 'next/image'
import {Box,VStack,Input,Heading} from "@chakra-ui/react"
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

        <Box w='50%' mt='2' p={4} borderWidth={"1px"} borderRadius={'lg'} overflow={'hidden'}>
          <Converter/>
        </Box>
      </main>
    </div>
  )
}
