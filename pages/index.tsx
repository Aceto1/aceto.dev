import type { NextPage } from 'next'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>About Me</h2>
      <p>Thanks for stopping by!</p>

      <p>I&apos;m a 24 year old software developer living in Jena, Germany. I&apos;m currently studying computer science while working as a fullstack developer at a medium-sized company in Erfurt.</p>

      <p>In my day to day work I mostly use TypeScript + React for any frontend development (of which I&apos;ve grown fond of recently) and .Net Core or Java for any backend related things. I have also worked with WPF in the past and did my fair share of database-level (SQL) development. You can learn more about my skills and background in my <Link href='/resume'><a>resume</a></Link>.</p>
    
      <p>Since programming is also a big passion of mine, I have created a few small projects and tools. A few of them can be found in my <Link href='/portfolio'><a>portfolio</a></Link> or on my <Link href='https://demo.aceto.dev/'><a>demo page</a></Link>.</p>

      <p>Besides coding I&apos;m also a huge keyboard nerd and try to keep a few cool plants alive in my appartment.</p>

      <p>Thanks for reading!</p>
      <p>Lucas</p>
    </div>
  )
}

export default Home
