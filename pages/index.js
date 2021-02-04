import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
export default function Home({user}) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Lima</title>
        <link
            rel="preload"
            href="/fonts/VCR/VCR_OSD_MONO_1.001.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>

      <main className={styles.main}>
        <img className={styles.avatar} src={user[0].owner.avatar_url} width="150" height="150" alt="limaale"/>
        <span className={styles.title}>{user[0].owner.login}</span>
        <span>Projetos</span>
        <span style={{fontFamily: 'DM Mono', color:'#56f5ff'}}>&darr;</span>
        {user.map((item)=>(
          <span className={styles.projectsTitle} key={item.name}>{item.name}</span>
        ))}
        <span>⚠️ under development ⚠️</span>
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