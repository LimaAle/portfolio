import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
export default function Home({user}) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Teste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to portfolio do Noilerua &#9733;
        </h1>
        {user.map((item)=>(
          <span>{item.name}</span>
        ))}
       
      </main>
    </div>
  )
}

export const getStaticProps = async ()=>{
  const response= await fetch('https://api.github.com/users/limaale/repos')
  const data= await response.json();

  return{
    props:{
      user:data
    }
  }
}