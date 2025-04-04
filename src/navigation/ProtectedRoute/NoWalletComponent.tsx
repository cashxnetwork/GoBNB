import { Heading, Image, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { WalletConnectButton } from '../../components/WalletConnectButton'

const MotionImage = motion(Image)

function NoWalletComponent() {
  return (
    <VStack spacing={5}>
      <VStack>
        <MotionImage animate={{
          y: [1, 7, 1]
        }} transition={{
          repeat: Infinity,
          duration: 2
        }} src="/errors-svgs/walletNotConnectedCat.svg" w={[200, 300]}></MotionImage>
        <Heading color="red" textAlign="center">You are not connected!</Heading>
        <Heading size="md" textAlign="center">Please connect Wallet to continue.</Heading>
      </VStack>
      <WalletConnectButton />
    </VStack>
  )
}

export default NoWalletComponent