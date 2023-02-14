import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Links } from '@/components/Links'
import { Headline } from '@/components/Headline'

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
  return (
    <>
      <main className={styles.main}>
        <Headline title={props.title}>
          <code className={styles.code}>pages/{props.title}.js</code>
        </Headline>
        <Links />
      </main>
    </>
  )
}
