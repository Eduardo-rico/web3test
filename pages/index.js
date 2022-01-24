import { useWeb3React } from '@web3-react/core'
import { useCallback, useEffect } from 'react'
import { connector } from '../config/web3'
import styles from '../styles/Home.module.css'


// window.ethereum.request({method: 'eth_requestAccounts'})
// .then(console.log)

export default function Home() {
  const {activate, active, deactivate, account, error, chainId} = useWeb3React()

  const connect = useCallback(() =>{
    activate(connector)
    localStorage.setItem('previuslyConnected', true)
  }, [activate])

  useEffect(() => {
    if(localStorage.getItem('previuslyConnected') === 'true'){
      connect()
    }
  }, [connect])



  const disconnect = () =>{
    deactivate()
    localStorage.removeItem('previuslyConnected')
  }

  if (error){
    return <p> Ha habido un error (desde el hook de web3) </p>
  }


  return (
    <div className={styles.container}>
      <h1>Test de Web3.0</h1>
      {
        active 
        ? <>
            <p>
              Estás conectado a la red {chainId}
            </p>
            <p>
              Tu dirección es {account}
            </p>
            <button onClick={disconnect}>Desconectar a la wallet</button>
          </>
        : <button onClick={connect}>Conectar a la wallet</button>
      }
      
    </div>
  )
}
