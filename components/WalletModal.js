import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react'
import Web3 from "web3"
export default function WalletModal({onClose,isOpen}){
    const [balance,setBalance]=useState();
    const [chainId,setChainId]=useState();

   async function handleOnClick(){
       if(window.ethereum){
           await window.ethereum.send('eth_requestAccounts');
            const web3=new Web3(window.ethereum);
            const accounts=await web3.eth.getAccounts();
            const balance=await web3.eth.getBalance(accounts[0]);
            setBalance(balance);
            setChainId(accounts[0]);
       }
   }

   async function handleDisconnect(){
     setChainId();
     setBalance();
   }
    return (
    <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Wallet Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
                {chainId?<Button bgColor="red" color='white' onClick={handleDisconnect}>Disconnect Wallet</Button>:<Button onClick={handleOnClick}>Connect to Metamask</Button>}
                {
                  chainId&&<>
                    <Text>Chain Id : {chainId}</Text>
                    <Text>Balance : {balance&&balance+" ETH"}</Text>
                  </>
                }
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
}