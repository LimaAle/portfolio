import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
export default function Home() {
  const [user,setUser]= useState({})
  useEffect(()=>{
    getuser()
    
  },[])
  async function getuser(){
    await axios.get('https://api.7gas.com.br/user/alessandrolima93@gmail.com').then(
      res=>{
        setUser(res.data)
      }
    )
    
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Teste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to ak
        </h1>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </main>
    </div>
  )
}
