import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Center, Spacer, Stack } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import Disconnected from '../components/Disconnected'
import Connected from '../components/Connected'
import { useWallet } from '@solana/wallet-adapter-react'


const Home: NextPage = () => {

  const { connected } = useWallet()

  return (
    <div className={styles.container}>
      <Head>
        <title>Afro Buildoors</title>
        <meta name="The nft collection for Afro Buildoors" />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <Box w="full" h="calc(150vh)" bgImage={ connected ? "" : "url(/home-background.svg)"} backgroundPosition="center" >
        <Stack w="full" h="calc(150vh)" justify="center">
          <NavBar />

          <Spacer />

          <Center>
            { /**IF connected show second view, otherwise the first */}
            { connected ? <Connected /> : <Disconnected />}
          </Center>

          <Spacer />

          <Center>
            <Box  color="white">
              <a href="https://twitter.com/@AdigweTim" target="_blank" rel="noopener noreferrer">
                built by @AdigweTim
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home
