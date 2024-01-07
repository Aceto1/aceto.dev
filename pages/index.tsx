import type { NextPage } from 'next'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>About Me</h2>
      <p>Thanks for stopping by!</p>

      <p>I&apos;m a 26 year old software developer living near Cologne, Germany. I&apos;m currently studying computer science while working fulltime as a .NET developer at a small company.</p>

      <p>In my day to day work I mostly use .NET and Blazor WASM (which I&apos;ve grown fond of recently). In my free time I also enjoy doing things with React and Next.js, like this website! I have also worked with WPF and Java in the past and did my fair share of database-level (SQL) development. You can learn more about my skills and background in my <Link href='/resume'>resume</Link>.</p>
    
      <p>Since programming is also a big passion of mine, I&apos;m currently trying to build a small portfolio. Head over to my <Link href='/projects'>projects page</Link> to take a look!</p>

      <p>Besides coding I&apos;m also a huge keyboard nerd and try to keep a few cool plants alive in my appartment. My newest interests include DJing so stay tuned!</p>

      <p>Thanks for reading!</p>
      <p>Lucas</p>
    </div>
  )
}

export default Home
