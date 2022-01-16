import styles from "../styles/Modal.module.css";
import { useEffect, useState } from "react";
import Web3 from "web3"
export default function Modal({setShowModal}){
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

    return <div className={styles.modal}>
        <div className={styles.modalBody}>
            <button onClick={()=>setShowModal(false)} className={styles.close}>&times;</button>
            <div className={styles.main}>
                <button className={styles.connect} onClick={handleOnClick}>Connect to metamask</button>
                <div className={styles.details}>
                   
                    {
                        chainId&&
                        <>
                            <div>
                                <label>Chain ID:</label>
                                <span>{chainId}</span>
                            </div>
                           <div>
                                 <label>Balance </label>
                                 <span>{balance}</span>
                           </div>
                           
                        </>
                    }

                </div>
            </div>
        </div>

    </div>
}