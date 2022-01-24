import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'


// window.ethereum.request({method: 'eth_requestAccounts'})
// .then(console.log)

export default function Home() {
  const {activate, active, deactivate, account, error, chainId} = useWeb3React()

  useEffect(() => {
    
  },[])

  const connect = () =>{

  }

  const disconnect = () =>{
    
  }


  return (
    <div className={styles.container}>
      <h1>Test de Web3.0</h1>
      <button onClick={connect}>Conectar a la wallet</button>
    </div>
  )
}
